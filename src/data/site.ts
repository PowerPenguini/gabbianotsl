export const company = {
  name: 'GABBIANO TSL',
  legalName: 'Gabbiano TSL sp. z o.o.',
  street: 'ul. Jana Kilińskiego 193/2.5',
  city: '93-126 Łódź',
  phone: '+42 278 75 74',
  phoneHref: '+48422787574',
  office: 'office@g-tsl.com',
  accounting: 'accounting@g-tsl.com',
  mapsUrl:
    'https://www.google.com/maps/place/Gabbiano+TSL+sp.+z+o.o./@51.7487181,19.4717127,17z/data=!4m12!1m2!2m1!1sgabbiano+tsl!3m8!1s0x8ca651da093f748d:0x6eccf60f5a3ebcb6!8m2!3d51.7487149!4d19.4742878!9m1!1b1!15sCgxnYWJiaWFubyB0c2ySARB0cnVja2luZ19jb21wYW554AEA!16s%2Fg%2F11txrdkjq_?entry=ttu',
  mapsEmbed: 'https://www.google.com/maps?q=51.7487149,19.4742878&z=15&output=embed',
};

export const nav = [
  { href: '/dla-klienta/', label: 'Dla klienta' },
  { href: '/dla-przewoznika/', label: 'Dla przewoźnika' },
  { href: '/flota/', label: 'Flota' },
  { href: '/galeria/', label: 'Galeria' },
  { href: '/kariera/', label: 'Kariera' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export const people = [
  {
    name: 'Łukasz Wieteska',
    role: 'CEO',
    phone: '+48 534 289 978',
    email: 'lukasz.wieteska@g-tsl.com',
  },
  {
    name: 'Andżelika Cieślak-Wieteska',
    role: 'Kadry i księgowość',
    phone: '+42 278 75 74',
    email: 'accounting@g-tsl.com',
  },
  {
    name: 'Dawid Wrzesiński',
    role: 'Specjalista ds. transportu międzynarodowego',
    phone: '+48 698 904 674',
    email: 'dawid.wrzesinski@g-tsl.com',
  },
];

export const strengths = [
  'Indywidualna obsługa',
  'Transparentność w biznesie',
  'Terminowość i dyspozycyjność',
  'Nowoczesna flota pojazdów',
  'Doświadczony zespół',
];

export const services = [
  {
    id: 'transport',
    eyebrow: 'Transport krajowy i międzynarodowy',
    title: 'Odbieramy i dostarczamy ładunki na czas',
    text: 'Naszym priorytetem jest terminowość. Realizujemy przewozy zgodnie z ustalonym harmonogramem, świadomi, jak kluczowe jest niezawodne wykonanie każdego zlecenia.',
    points: [
      'Ładunki całopojazdowe (FTL) i częściowe (LTL)',
      'Kompletna obsługa łańcuchów dostaw',
      'Flota dostosowana do potrzeb ładunku',
    ],
    image: '/img/truck-road.webp',
    href: '/dla-klienta/#transport',
  },
  {
    id: 'spedycja',
    eyebrow: 'Usługi spedycyjne',
    title: 'Stałe zlecenia i terminowe płatności',
    text: 'Tworzymy solidne fundamenty dla naszych partnerów biznesowych. Stałe zlecenia zapewniają stabilność i pewność działania, a przejrzyste rozliczenia budują zaufanie.',
    points: ['Terminowe płatności', 'Stałe zlecenia', 'Indywidualne podejście'],
    image: '/img/highway.webp',
    href: '/dla-przewoznika/',
  },
  {
    id: 'magazynowanie',
    eyebrow: 'Magazynowanie',
    title: 'Bezpieczne i efektywne magazynowanie',
    text: 'Oferujemy kompleksowe usługi magazynowe dostosowane do unikalnych potrzeb Twojego biznesu, od krótkoterminowego składowania po obsługę stałych przepływów towaru.',
    points: [
      'Bezpieczeństwo na pierwszym miejscu',
      'Precyzyjna organizacja przestrzeni',
      'Elastyczne warunki przechowywania',
    ],
    image: '/img/warehouse.webp',
    href: '/dla-klienta/#magazynowanie',
  },
];

export const testimonials = [
  {
    who: 'Klient',
    text: 'Niesamowita obsługa! Szybko i konkretnie. Wartościowy partner. Polecam Gabbiano TSL!',
  },
  {
    who: 'Przewoźnik',
    text: 'Wspaniała współpraca z Gabbiano TSL. Stałe zlecenia i uczciwe płatności sprawiają, że pracuje się z przyjemnością. Bardzo polecam!',
  },
  {
    who: 'Klient',
    text: 'Jestem bardzo zadowolony ze współpracy! Gabbiano TSL to firma, która naprawdę docenia swoich partnerów.',
  },
  {
    who: 'Przewoźnik',
    text: 'Terminowe płatności, stałe zlecenia i partnerskie podejście do współpracy.',
  },
];

export const trailers = [
  {
    name: 'Mega',
    tag: 'Specjalizacja',
    text: 'Naczepa o zwiększonej wysokości wewnętrznej przy zachowaniu standardowej wysokości zestawu. Więcej przestrzeni dla wysokich i objętościowych ładunków, idealna w transporcie międzynarodowym.',
  },
  {
    name: 'Standard',
    text: 'Uniwersalna naczepa o długości ok. 13,6 m. Sprawdza się przy towarach paletowych, materiałach budowlanych i większości ładunków drobnicowych.',
  },
  {
    name: 'Firanka',
    text: 'Naczepa plandekowa z przesuwanymi bokami. Załadunek z boku, tyłu lub od góry oraz ochrona towaru przed warunkami atmosferycznymi.',
  },
  {
    name: 'Back Door Extension',
    text: 'Rozszerzenie tylnych drzwi pozwala elastycznie wydłużyć przestrzeń ładunkową, co ułatwia przewóz ładunków o nietypowych wymiarach.',
  },
  {
    name: 'Coilmulde',
    text: 'Naczepa z wyprofilowaną platformą do przewozu kręgów stalowych (coils). Specjalne gniazda i mocowania stabilizują ładunek na całej trasie.',
  },
  {
    name: 'Joloda',
    text: 'System szyn i rolek w podłodze umożliwia szybkie przesuwanie palet, skracając czas załadunku i rozładunku.',
  },
  {
    name: 'Jumbo',
    text: 'Naczepa o maksymalnej objętości ładunkowej, przeznaczona dla dużych, lekkich i wielkogabarytowych towarów.',
  },
  {
    name: 'Skrzynia',
    text: 'Zamknięte, sztywne nadwozie zapewniające dodatkową ochronę dla towarów wrażliwych, takich jak elektronika czy żywność.',
  },
  {
    name: 'Chłodnia',
    text: 'Izolowana komora z agregatem i rejestracją temperatury. Do żywności, leków i innych ładunków wymagających kontrolowanych warunków.',
  },
  {
    name: 'Izoterma',
    text: 'Nadwozie izolowane termicznie, utrzymujące stabilną temperaturę ładunku w trakcie przewozu.',
  },
  {
    name: 'Hakówka',
    text: 'Pojazd z systemem hakowym do podnoszenia, transportu i opuszczania kontenerów bez dodatkowego sprzętu.',
  },
  {
    name: 'Cysterna',
    text: 'Szczelny zbiornik do przewozu płynów i gazów, wyposażony w zawory i czujniki bezpieczeństwa.',
  },
  {
    name: 'Silos',
    text: 'Zbiornik do materiałów sypkich, takich jak cement, mąka, granulaty czy ziarno, z systemem pneumatycznego rozładunku.',
  },
  {
    name: 'Wywrotka',
    text: 'Naczepa z hydraulicznym mechanizmem kiprowania do szybkiego rozładunku kruszyw, piasku i gruzu.',
  },
  {
    name: 'Niskopodwozie',
    text: 'Platforma o obniżonym profilu do przewozu maszyn, konstrukcji stalowych i ciężkich ładunków ponadgabarytowych.',
  },
];

/**
 * Adres endpointu formularzy (np. Formspree, Web3Forms, własne API).
 * Dopóki jest pusty, formularze otwierają gotową wiadomość e-mail w programie pocztowym.
 */
export const FORM_ENDPOINT = '';
