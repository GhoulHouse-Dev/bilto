# Bilto Oy — Next.js redesign

Bilto.fi-uudistuksen Next.js App Router -toteutus hyväksytyn design briefin pohjalta.

## Teknologia
- Next.js 15 / App Router
- TypeScript
- CSS design tokenit
- next/image + repossa olevat Bilton omat kuvat
- SEO metadata, sitemap, robots, schema
- tarjouslomakkeen API-runko Resendille

## Kehitys
```bash
npm install
npm run dev
npm run build
```

## Ympäristömuuttujat
```
RESEND_API_KEY=
CONTACT_TO=
```

Ilman näitä tarjouslomake palauttaa hallitun 503-virheen eikä lähetä tietoja.

## Ennen tuotantoa
- vahvista lopullinen puhelin, sähköposti ja osoite
- vahvista Bilto numeroina -luvut ja mahdollinen Ivalon toimipiste
- vahvista tiimin henkilötiedot
- vahvista referenssien tarkat urakkasisällöt
- hyväksytä kaikki kuvat ja brändivärit
