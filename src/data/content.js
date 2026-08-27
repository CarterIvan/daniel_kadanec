import heroImg from '../assets/images/hero.png'
import kitchenWhiteSubway from '../assets/images/kitchen-white-subway.jpg'
import wardrobeMirror from '../assets/images/wardrobe-mirror.jpeg'
import kitchenDiningPendant from '../assets/images/kitchen-dining-pendant.jpeg'
import bathroomVanity from '../assets/images/bathroom-vanity.jpeg'
import kitchenBeigePantry from '../assets/images/kitchen-beige-pantry.jpeg'
import kitchenGoldFaucet from '../assets/images/kitchen-gold-faucet.jpeg'
import hallwayWardrobe from '../assets/images/hallway-wardrobe.jpeg'

export { heroImg, kitchenDiningPendant }

export const navLinks = [
  { label: 'Domov', href: '#home' },
  { label: 'Kuchyne', href: '#services' },
  { label: 'Vstavané skrine', href: '#services' },
  { label: 'Nábytok na mieru', href: '#services' },
  { label: 'Realizácie', href: '#projects' },
  { label: 'O mne', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
]

export const features = [
  {
    title: 'Nábytok na mieru',
    description: 'Presne podľa vašich predstáv\na potrieb',
  },
  {
    title: 'Kvalitné materiály',
    description: 'EGGER a ďalšie overené\nmateriály',
  },
  {
    title: 'Precízna práca',
    description: 'Dôraz na detail a funkčnosť\nv každom projekte',
  },
  {
    title: 'Bratislava a okolie',
    description: 'Rýchla komunikácia\na spoľahlivá montáž',
  },
]

export const services = [
  {
    slug: 'kuchyne-na-mieru',
    title: 'Kuchyne na mieru',
    description: 'Moderné kuchyne na mieru z laminovaných dosiek s dôrazom na kvalitu a funkčnosť.',
    image: kitchenWhiteSubway,
  },
  {
    slug: 'vstavane-skrine',
    title: 'Vstavané skrine',
    description: 'Praktické vstavané skrine do spálne, chodby či obývačky. Maximálne využitie priestoru.',
    image: wardrobeMirror,
  },
  {
    slug: 'nabytok-do-interieru',
    title: 'Nábytok do interiéru',
    description: 'TV steny, komody, police a ďalší nábytok na mieru, ktorý dotvorí váš domov.',
    image: kitchenDiningPendant,
  },
  {
    slug: 'kupelnovy-nabytok',
    title: 'Kúpeľňový nábytok',
    description: 'Kúpeľňový nábytok na mieru z kvalitných materiálov odolných voči vlhkosti.',
    image: bathroomVanity,
  },
]

export const aboutChecklist = [
  'Individuálny prístup ku každému zákazníkovi',
  'Kvalitné materiály od overených výrobcov (EGGER, Kronospan, Kaindl...)',
  'Precízne spracovanie s dôrazom na detail',
  'Montáž v Bratislave a okolí',
]

export const projects = [
  { image: kitchenWhiteSubway, title: 'Kuchyňa na mieru', category: 'Kuchyne' },
  { image: wardrobeMirror, title: 'Vstavaná skriňa', category: 'Vstavané skrine' },
  { image: bathroomVanity, title: 'Kúpeľňová skrinka', category: 'Kúpeľňový nábytok' },
  { image: kitchenGoldFaucet, title: 'Kuchynská linka', category: 'Kuchyne' },
  { image: hallwayWardrobe, title: 'Predsieňová skriňa', category: 'Vstavané skrine' },
]

export const materials = [
  {
    name: 'EGGER',
    manufacturer: 'EGGER',
    description: 'Viac ako dizajn.',
    materialCode: 'egger',
    logoColor: '#d1242f',
  },
  {
    name: 'kronospan',
    manufacturer: 'Kronospan',
    description: 'Kvalita a inovácia.',
    materialCode: 'kronospan',
    logoColor: '#1c3f6e',
  },
  {
    name: 'KAINDL',
    manufacturer: 'Kaindl',
    description: 'Rakúska precíznosť.',
    materialCode: 'kaindl',
    logoColor: '#1c1c1c',
  },
  {
    name: 'A ďalšie',
    manufacturer: 'Ostatní výrobcovia',
    description: 'Široký výber dekorov a doplnkov.',
    materialCode: 'other',
    image: kitchenBeigePantry,
  },
]

export const footerServices = [
  'Kuchyne na mieru',
  'Vstavané skrine',
  'Nábytok do interiéru',
  'Kúpeľňový nábytok',
  'TV steny a obývačky',
  'Ostatný nábytok',
]

export const footerLinks = [
  { label: 'Domov', href: '#home' },
  { label: 'Realizácie', href: '#projects' },
  { label: 'O mne', href: '#about' },
  { label: 'Materiály', href: '#materials' },
  { label: 'Kontakt', href: '#contact' },
]
