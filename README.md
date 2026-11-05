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

- `src/data/site.ts`: dane firmy, zespół, usługi, opinie, typy naczep, adres endpointu formularzy
- `src/layouts/Base.astro`: wspólny szablon (SEO, nagłówek, stopka)
- `src/components/`: nagłówek, stopka, sekcje wielokrotnego użytku, formularz
- `src/pages/`: podstrony (te same adresy URL co na obecnej stronie WordPress)
- `src/styles/global.css`: kolory marki, typografia, przyciski, formularze
- `public/img/`: zoptymalizowane zdjęcia (WebP) i logo

## Do uzupełnienia przed publikacją

1. **Formularze**: ustaw `FORM_ENDPOINT` w `src/data/site.ts` (np. Formspree, Web3Forms lub własne API).
   Dopóki jest pusty, formularz otwiera program pocztowy z gotową wiadomością do `office@g-tsl.com`.
   Upload CV w zakładce Kariera działa tylko z endpointem.
2. **Polityka prywatności**: `src/pages/polityka-prywatnosci.astro` zawiera tymczasową treść.
3. **Numer biura**: na obecnej stronie widnieje `+42 278 75 74`. Link `tel:` zakłada `+48 42 278 75 74` (numer stacjonarny w Łodzi). Do potwierdzenia.
