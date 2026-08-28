import kitchenWhiteSubway from '../assets/images/kitchen-white-subway.jpg'
import kitchenGreyMarble from '../assets/images/kitchen-grey-marble.jpeg'
import kitchenBeigePantry from '../assets/images/kitchen-beige-pantry.jpeg'
import kitchenGoldFaucet from '../assets/images/kitchen-gold-faucet.jpeg'
import kitchenDiningPendant from '../assets/images/kitchen-dining-pendant.jpeg'
import kitchenWoodSlatsDay from '../assets/images/kitchen-wood-slats-day.jpeg'
import kitchenCornerWindowView from '../assets/images/kitchen-corner-window-view.jpeg'
import kitchenCopperOrangeEvening from '../assets/images/kitchen-copper-orange-evening.jpeg'
import kitchenWhiteMinimalistOpenPlan from '../assets/images/kitchen-white-minimalist-open-plan.jpeg'
import kitchenOliveGreenBrassHandles from '../assets/images/kitchen-olive-green-brass-handles.jpeg'
import kitchenBlueGreyShakerStyle from '../assets/images/kitchen-blue-grey-shaker-style.jpeg'
import kitchenMintGreenCabinets from '../assets/images/kitchen-mint-green-cabinets.jpeg'
import heroImg from '../assets/images/hero.png'
import wardrobeMirror from '../assets/images/wardrobe-mirror.jpeg'
import wardrobeOpen from '../assets/images/wardrobe-open.jpg'
import hallwayWardrobe from '../assets/images/hallway-wardrobe.jpeg'
import staircase from '../assets/images/staircase.jpeg'
import bathroomVanity from '../assets/images/bathroom-vanity.jpeg'
import interiorBedStorageDrawers from '../assets/images/interior-bed-storage-drawers.jpeg'
import interiorSideboardTvCabinet from '../assets/images/interior-sideboard-tv-cabinet.jpeg'
import interiorBedFrameStorageOverhead from '../assets/images/interior-bed-frame-storage-overhead.jpeg'
import interiorStaircaseStorageDrawers from '../assets/images/interior-staircase-storage-drawers.jpeg'
import interiorStaircaseWinderSteps from '../assets/images/interior-staircase-winder-steps.jpeg'
import interiorTvWallUnitShelving from '../assets/images/interior-tv-wall-unit-shelving.jpeg'
import interiorStaircaseBuiltInWardrobe from '../assets/images/interior-staircase-built-in-wardrobe.jpeg'
import interiorMurphyBedFloatingShelf from '../assets/images/interior-murphy-bed-floating-shelf.jpeg'
import kupelna1 from '../assets/images/kupelna1.jpeg'
import kupelna2 from '../assets/images/kupelna2.jpeg'
import kupelna3 from '../assets/images/kupelna3.jpeg'
import kupelna4 from '../assets/images/kupelna4.jpeg'
import kupelna5 from '../assets/images/kupelna5.jpeg'
import skrina1 from '../assets/images/skrina1.jpeg'
import skrina2 from '../assets/images/skrina2.jpeg'
import skrina3 from '../assets/images/skrina3.jpeg'
import skrina4 from '../assets/images/skrina4.jpeg'
import skrina5 from '../assets/images/skrina5.jpeg'
import skrina6 from '../assets/images/skrina6.jpeg'

// Shared across every service page — the process itself doesn't change
// depending on what's being built, only the content around it does.
export const processSteps = [
  { number: '01', title: 'Zameranie', description: 'Presné zameranie priestoru a pochopenie vašich potrieb.' },
  { number: '02', title: 'Návrh', description: 'Návrh riešenia podľa priestoru, štýlu a spôsobu používania.' },
  { number: '03', title: 'Výroba', description: 'Precízna výroba z vybraných materiálov a komponentov.' },
  { number: '04', title: 'Montáž', description: 'Finálna montáž a dotiahnutie každého detailu.' },
]

export const serviceDetails = {
  'kuchyne-na-mieru': {
    slug: 'kuchyne-na-mieru',
    category: 'Kuchyne na mieru',
    title: 'Kuchyne na mieru',
    heroImage: heroImg,
    heroDescription:
      'Kuchyne navrhnuté presne podľa dispozície vášho bytu či domu — od úložného priestoru až po osvetlenie pracovnej dosky.',
    intro: {
      statement: 'Kuchyňa, ktorá vzniká presne podľa vášho priestoru.',
      paragraphs: [
        'Každá kuchyňa, ktorú navrhujem, vychádza z reálnych rozmerov a spôsobu, akým v nej budete variť a tráviť čas. Žiadne kompromisy s katalógovými rozmermi.',
        'Pracujem s laminovanými doskami EGGER a ďalšími overenými materiálmi, ktoré kombinujú odolnosť s prirodzeným, teplým vzhľadom dreva.',
        'Výsledkom je kuchyňa, ktorá pôsobí ako súčasť architektúry bytu — nie ako doplnkový nábytok.',
      ],
    },
    gallery: [
      { image: kitchenWhiteSubway, alt: 'Kuchynská linka s bielym obkladom' },
      { image: kitchenGreyMarble, alt: 'Kuchyňa so sivou mramorovou doskou' },
      { image: kitchenGoldFaucet, alt: 'Detail zlatej kuchynskej batérie' },
      { image: kitchenBeigePantry, alt: 'Vysoká skriňa s vstavanými spotrebičmi' },
      { image: kitchenDiningPendant, alt: 'Kuchyňa s jedálenským stolom a závesným svietidlom' },
      { image: kitchenWoodSlatsDay, alt: 'Kuchyňa s drevenou lamelovou stenou' },
      { image: kitchenMintGreenCabinets, alt: 'Kuchyňa s mätovozelenými skrinkami a drevenou pracovnou doskou' },
      { image: kitchenCornerWindowView, alt: 'Kuchyňa v rohu s veľkým oknom a výhľadom na mesto' },
      { image: kitchenCopperOrangeEvening, alt: 'Kuchyňa v medenom odtieni s tmavou digestorom' },
      { image: kitchenWhiteMinimalistOpenPlan, alt: 'Biela minimalistická kuchyňa v otvorenom priestore' },
      { image: kitchenOliveGreenBrassHandles, alt: 'Olivovozelená kuchyňa s mosadznými úchytkami' },
      { image: kitchenBlueGreyShakerStyle, alt: 'Modrosivá kuchyňa v klasickom ráme so zásobníkovou skriňou' },
    ],
    features: [
      { number: '01', title: 'Návrh a zameranie', description: 'Presné zameranie priestoru a 3D vizualizácia pred výrobou.' },
      { number: '02', title: 'Výber materiálov', description: 'Laminované dosky EGGER a ďalšie overené povrchy na mieru.' },
      { number: '03', title: 'Vstavané spotrebiče', description: 'Priestor navrhnutý presne pod zvolené spotrebiče.' },
      { number: '04', title: 'Výroba na mieru', description: 'Každý kus vyrobený vo vlastnej dielni podľa návrhu.' },
      { number: '05', title: 'Precízna montáž', description: 'Montáž bez kompromisov, s dôrazom na detail a funkčnosť.' },
      { number: '06', title: 'Individuálny prístup', description: 'Osobná komunikácia od prvého nápadu až po odovzdanie.' },
    ],
    quality: [
      { label: 'EGGER', description: 'Odolné laminované dosky s prirodzeným vzhľadom dreva.' },
      { label: 'Kovanie', description: 'Spoľahlivé kovanie a mechanizmy pre každodenné používanie.' },
      { label: 'Detail', description: 'Precízne spracovanie hrán, spojov a vnútorných prvkov.' },
    ],
    finalCta: {
      heading: 'Máte predstavu o svojej novej kuchyni?',
      text: 'Porozprávajme sa o vašom projekte.',
    },
  },

  'vstavane-skrine': {
    slug: 'vstavane-skrine',
    category: 'Vstavané skrine',
    title: 'Vstavané skrine',
    heroImage: wardrobeMirror,
    heroDescription:
      'Vstavané skrine, ktoré maximálne využijú priestor spálne, chodby či šatníka — presne podľa rozmerov vášho interiéru.',
    intro: {
      statement: 'Úložný priestor, ktorý zapadne do každého kúta.',
      paragraphs: [
        'Vstavané skrine navrhujem tak, aby využili aj náročné dispozície — šikminy, výklenky či úzke chodby — bez straty úložnej kapacity.',
        'Vnútorné usporiadanie prispôsobím presne tomu, čo v skrini skutočne potrebujete uskladniť — od oblečenia po športové vybavenie.',
        'Povrchy a úchytky vyberáme spoločne tak, aby skriňa ladila so zvyškom interiéru.',
      ],
    },
    gallery: [
      { image: wardrobeMirror, alt: 'Vstavaná skriňa so zrkadlovými dverami' },
      { image: wardrobeOpen, alt: 'Otvorená vstavaná skriňa s vnútorným usporiadaním' },
      { image: hallwayWardrobe, alt: 'Predsieňová skriňa s lavicou' },
      { image: skrina1, alt: 'Vstavaná skriňa na mieru' },
      { image: skrina2, alt: 'Vstavaná skriňa na mieru' },
      { image: skrina3, alt: 'Vstavaná skriňa na mieru' },
      { image: skrina4, alt: 'Vstavaná skriňa na mieru' },
      { image: skrina5, alt: 'Vstavaná skriňa na mieru' },
      { image: skrina6, alt: 'Vstavaná skriňa na mieru' },
    ],
    features: [
      { number: '01', title: 'Zameranie priestoru', description: 'Presné zameranie aj náročných dispozícií a šikmín.' },
      { number: '02', title: 'Návrh interiéru skrine', description: 'Vnútorné usporiadanie podľa toho, čo v skrini skladujete.' },
      { number: '03', title: 'Výber povrchov', description: 'Dekory a úchytky ladiace so zvyškom interiéru.' },
      { number: '04', title: 'Výroba na mieru', description: 'Presné rozmery bez kompromisov katalógových skríň.' },
      { number: '05', title: 'Montáž', description: 'Čistá a rýchla montáž priamo u vás doma.' },
      { number: '06', title: 'Individuálny prístup', description: 'Riešenie šité na mieru vášmu priestoru aj rozpočtu.' },
    ],
    quality: [
      { label: 'Materiál', description: 'Laminované dosky a dekory odolné voči bežnému opotrebeniu.' },
      { label: 'Kovanie', description: 'Tiché a plynulé mechanizmy posuvných dverí a zásuviek.' },
      { label: 'Detail', description: 'Presné spracovanie vnútorného usporiadania na mieru.' },
    ],
    finalCta: {
      heading: 'Máte predstavu o svojej novej skrini?',
      text: 'Porozprávajme sa o vašom projekte.',
    },
  },

  'nabytok-do-interieru': {
    slug: 'nabytok-do-interieru',
    category: 'Nábytok do interiéru',
    title: 'Nábytok do interiéru',
    heroImage: kitchenDiningPendant,
    heroDescription:
      'TV steny, komody, police a ďalší nábytok na mieru, ktorý dotvorí obývačku či spálňu presne podľa vašich predstáv.',
    intro: {
      statement: 'Nábytok, ktorý dotvára charakter interiéru.',
      paragraphs: [
        'Nie každý kus nábytku musí byť z kuchyne či spálne — rád navrhujem aj TV steny, knižnice, komody či vstavané police, ktoré doplnia zvyšok domácnosti.',
        'Dizajn prispôsobím zvyšku interiéru tak, aby nábytok pôsobil ako jeho prirodzená súčasť, nie dodatočný doplnok.',
        'Aj tu platí rovnaký prístup ako pri kuchyniach — kvalitné materiály a precízne spracovanie na mieru.',
      ],
    },
    gallery: [
      { image: kitchenDiningPendant, alt: 'Obývacia stena s otvorenými policami' },
      { image: staircase, alt: 'Vstavaný nábytok pri schodisku' },
      { image: wardrobeOpen, alt: 'Otvorené police na mieru' },
      { image: interiorBedStorageDrawers, alt: 'Posteľ na mieru s úložnými zásuvkami' },
      { image: interiorSideboardTvCabinet, alt: 'Nízka komoda a skriňa pod podkrovnými oknami' },
      { image: interiorBedFrameStorageOverhead, alt: 'Detail postele s bočným úložným priestorom' },
      { image: interiorStaircaseStorageDrawers, alt: 'Schodisko so vstavanými zásuvkami z dubového dekoru' },
      { image: interiorStaircaseWinderSteps, alt: 'Detail drevených schodiskových stupňov' },
      { image: interiorTvWallUnitShelving, alt: 'Obývacia stena s TV a otvorenými poličkami' },
      { image: interiorStaircaseBuiltInWardrobe, alt: 'Vstavaná skriňa pod schodiskom z dreveného dekoru' },
      { image: interiorMurphyBedFloatingShelf, alt: 'Sklápacia posteľ s asymetrickou policovou zostavou' },
    ],
    features: [
      { number: '01', title: 'Návrh a zameranie', description: 'Návrh, ktorý zohľadňuje zvyšok interiéru aj dispozíciu.' },
      { number: '02', title: 'Výber materiálov', description: 'Dekory a povrchy ladiace s existujúcim nábytkom.' },
      { number: '03', title: 'Výroba na mieru', description: 'Presné rozmery pre TV steny, police aj komody.' },
      { number: '04', title: 'Precízne spracovanie', description: 'Dôraz na detail pri každom kuse nábytku.' },
      { number: '05', title: 'Montáž', description: 'Rýchla a čistá montáž priamo u vás doma.' },
      { number: '06', title: 'Individuálny prístup', description: 'Riešenie presne podľa vašich predstáv a priestoru.' },
    ],
    quality: [
      { label: 'Materiál', description: 'Kvalitné dosky a dyhy ladiace so zvyškom interiéru.' },
      { label: 'Povrchy', description: 'Odolné a ľahko udržiavateľné povrchové úpravy.' },
      { label: 'Detail', description: 'Čisté línie a precízne spracovanie viditeľných hrán.' },
    ],
    finalCta: {
      heading: 'Máte predstavu o svojom novom nábytku?',
      text: 'Porozprávajme sa o vašom projekte.',
    },
  },

  'kupelnovy-nabytok': {
    slug: 'kupelnovy-nabytok',
    category: 'Kúpeľňový nábytok',
    title: 'Kúpeľňový nábytok',
    heroImage: bathroomVanity,
    heroDescription:
      'Kúpeľňový nábytok na mieru z materiálov odolných voči vlhkosti — od skriniek pod umývadlo až po zrkadlové zostavy.',
    intro: {
      statement: 'Kúpeľňa, kde má každý centimeter svoje miesto.',
      paragraphs: [
        'Kúpeľňový nábytok navrhujem s dôrazom na odolnosť voči vlhkosti aj na to, aby úložný priestor slúžil presne tomu, čo v kúpeľni potrebujete mať poruke.',
        'Skrinky pod umývadlo, zrkadlové zostavy aj vysoké skrine vyrábam z materiálov určených priamo do vlhkého prostredia.',
        'Výsledkom je kúpeľňa, ktorá pôsobí čisto a usporiadane, bez zbytočných kompromisov.',
      ],
    },
    gallery: [
      { image: bathroomVanity, alt: 'Kúpeľňová skrinka pod umývadlo s okrúhlym zrkadlom' },
      { image: kupelna1, alt: 'Kúpeľňový nábytok na mieru' },
      { image: kupelna2, alt: 'Kúpeľňový nábytok na mieru' },
      { image: kupelna3, alt: 'Kúpeľňový nábytok na mieru' },
      { image: kupelna4, alt: 'Kúpeľňový nábytok na mieru' },
      { image: kupelna5, alt: 'Kúpeľňový nábytok na mieru' },
    ],
    features: [
      { number: '01', title: 'Návrh a zameranie', description: 'Návrh prispôsobený vlhkému prostrediu a dispozícii kúpeľne.' },
      { number: '02', title: 'Odolné materiály', description: 'Povrchy určené priamo do vlhkého prostredia.' },
      { number: '03', title: 'Výroba na mieru', description: 'Skrinky, zrkadlové zostavy aj vysoké skrine na mieru.' },
      { number: '04', title: 'Precízne spracovanie', description: 'Dôraz na detail aj pri drobných kúpeľňových prvkoch.' },
      { number: '05', title: 'Montáž', description: 'Čistá montáž bez zásahu do existujúcich rozvodov.' },
      { number: '06', title: 'Individuálny prístup', description: 'Riešenie presne podľa veľkosti a tvaru vašej kúpeľne.' },
    ],
    quality: [
      { label: 'Materiál', description: 'Dosky a povrchy odolné voči vlhkosti a vode.' },
      { label: 'Kovanie', description: 'Nehrdzavejúce kovanie vhodné do kúpeľne.' },
      { label: 'Detail', description: 'Precízne utesnené spoje a hrany.' },
    ],
    finalCta: {
      heading: 'Máte predstavu o svojej novej kúpeľni?',
      text: 'Porozprávajme sa o vašom projekte.',
    },
  },
}
