import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../public/',import.meta.url));
const html = await readFile(path.join(root,'index.html'),'utf8');
test('all local links and media exist', async () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (url.startsWith('#')) assert.ok(ids.has(url.slice(1)),url);
    else if (!/^[a-z]+:/i.test(url)) await access(path.join(root,url));
  }
});
test('one Finnish H1, preview disclosure and robots exclusions', async () => {
  assert.equal((html.match(/<h1\b/g)||[]).length,1);
  assert.match(html,/<html lang="fi">/);
  assert.match(html,/noindex,nofollow,noarchive/);
  assert.match(html,/Vido Social/);
  assert.doesNotMatch(html,/GhoulHouse|ghoulhouse/);
  assert.match(html,/Tietoja ei lähetetä eikä tallenneta/);
  assert.match(await readFile(path.join(root,'robots.txt'),'utf8'),/Disallow: \//);
});
test('form has no transmission or storage code', async () => {
  const js = await readFile(path.join(root,'app.js'),'utf8');
  assert.match(js,/preventDefault/);
  assert.doesNotMatch(js,/fetch\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon/);
  const config = JSON.parse(await readFile(new URL('../vercel.json',import.meta.url),'utf8'));
  assert.ok(config.headers[0].headers.some(h => h.key==='Content-Security-Policy' && h.value.includes("form-action 'none'")));
});
