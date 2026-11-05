<img src="assets/icon.svg" width="64" height="64" alt="">

# GABBIANO TSL: nowa strona

Odświeżona, statyczna strona internetowa [gabbianotsl.com](https://gabbianotsl.com), zbudowana w [Astro](https://astro.build).

## Uruchomienie

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statyczne pliki w dist/
npm run preview   # podgląd wersji produkcyjnej
```

## Struktura

- `src/data/site.ts`: dane firmy (telefon, e-maile, adres), zespół, usługi, opinie, typy naczep
- `src/layouts/Base.astro`: wspólny szablon (SEO, nagłówek, stopka)
- `src/components/`: nagłówek, stopka, sekcje wielokrotnego użytku, `ContactDirect` (bloki telefon + e-mail)
- `src/pages/`: podstrony (te same adresy URL co na obecnej stronie WordPress)
- `src/styles/global.css`: kolory marki, typografia, przyciski, formularze
- `public/img/`: zoptymalizowane zdjęcia (WebP) i logo

## Kontakt zamiast formularzy

Strona celowo nie ma formularzy. Wszystkie wezwania do działania prowadzą do telefonu (`tel:`)
lub e-maila (`mailto:` z gotowym tematem i listą informacji do podania).

## Do uzupełnienia przed publikacją

1. **Polityka prywatności**: `src/pages/polityka-prywatnosci.astro` zawiera tymczasową treść.
