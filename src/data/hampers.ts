import heroHamperImg from '../assets/images/hero_chocolate_hamper_1794770547045.jpg';
import classicBoxImg from '../assets/images/hamper_classic_box_1794770547555.jpg';
import festivePralineImg from '../assets/images/hamper_festive_praline_1794770547198.jpg';
import velvetBoxImg from '../assets/images/hamper_velvet_unbranded_1794770568008.jpg';
import grandTrunkImg from '../assets/images/hamper_grand_trunk_1794770568395.jpg';
import kitchenCraftImg from '../assets/images/kitchen_tempering_craft_1794770548069.jpg';

export const WHATSAPP_DISPLAY = '8955257977';
export const WHATSAPP_NUMBER = '918955257977';

export const IMAGES = {
  hero: heroHamperImg,
  classicBox: classicBoxImg,
  festivePraline: festivePralineImg,
  velvetBox: velvetBoxImg,
  grandTrunk: grandTrunkImg,
  kitchenCraft: kitchenCraftImg,
};

export type HamperCategory = 'all' | 'simple' | 'vip';

export interface SignatureHamper {
  id: string;
  name: string;
  category: Exclude<HamperCategory, 'all'>;
  categoryLabel: string;
  pieces: number;
  weightGrams: number;
  price: number;
  image: string;
  description: string;
  contents: string[];
  featuredNote?: string;
}

export interface PackagingOption {
  id: string;
  name: string;
  priceDelta: number;
  description: string;
}

export interface BagItem {
  uid: string;
  title: string;
  subtitle: string;
  unitPrice: number;
  quantity: number;
  details: string[];
  image: string;
}

export const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: 'pack-kraft',
    name: 'Artisanal Kraft & Natural Twine',
    priceDelta: 0,
    description: 'Eco-kraft rigid box tied with jute twine and a simple botanical sprig.',
  },
  {
    id: 'pack-satin',
    name: 'Festive Satin Ribbon & Dried Florals',
    priceDelta: 120,
    description: 'Antique bronze satin ribbon bow, tissue lining, and dried floral accent.',
  },
];

export const OCCASIONS: string[] = [
  'Birthday Celebration',
  'Anniversary',
  'Diwali & Festive',
  'Wedding & Return Favors',
  'Corporate & Client Gifting',
  'Thank You / Host Gift',
];

export const SIGNATURE_HAMPERS: SignatureHamper[] = [
  {
    id: 'simple-classic-500',
    name: 'Simple Classic Hearth Box',
    category: 'simple',
    categoryLabel: 'Simple Hamper',
    pieces: 9,
    weightGrams: 160,
    price: 500,
    image: IMAGES.classicBox,
    description:
      'Our clean entry hamper with crunchy rock chocolate, smooth truffle chocolate, and roasted almond bites.',
    contents: ['Rock Chocolate', 'Truffle Chocolate', 'Nutty Almond Chocolate'],
    featuredNote: 'Starting ₹500/-',
  },
  {
    id: 'simple-nutty-750',
    name: 'Simple Nutty & Raisin Box',
    category: 'simple',
    categoryLabel: 'Simple Hamper',
    pieces: 12,
    weightGrams: 220,
    price: 750,
    image: IMAGES.classicBox,
    description:
      'Generous everyday hamper blending nutty chocolates with hazelnut, almond, pista, and raisins alongside rich truffles.',
    contents: ['Hazelnut & Almond Chocolates', 'Pista & Raisins Chocolates', 'Truffle Chocolate'],
  },
  {
    id: 'simple-complete-1100',
    name: 'Simple Complete Hearth Hamper',
    category: 'simple',
    categoryLabel: 'Simple Hamper',
    pieces: 18,
    weightGrams: 320,
    price: 1100,
    image: IMAGES.festivePraline,
    description:
      'All six kitchen classics together—rock chocolate, truffle chocolate, and nutty hazelnut, almond, pista & raisins wrapped in satin ribbon.',
    contents: [
      'Rock & Truffle Chocolates',
      'Hazelnut, Almond & Pista Nutty Chocolates',
      'Raisin Chocolate & Satin Ribbon Wrap',
    ],
    featuredNote: 'All 6 Classics',
  },
  {
    id: 'vip-berry-nut-1650',
    name: 'VIP Berry & Nut Keepsake Box',
    category: 'vip',
    categoryLabel: 'VIP Hamper',
    pieces: 20,
    weightGrams: 360,
    price: 1650,
    image: IMAGES.velvetBox,
    description:
      'VIP assortment elevated with tangy dried raspberry and red currant chocolates alongside truffles, rock chocolate, and roasted nuts.',
    contents: [
      'VIP Dried Raspberry & Red Currant Chocolates',
      'Truffle & Rock Chocolates',
      'Hazelnut, Almond, Pista & Raisin Chocolates',
    ],
    featuredNote: 'VIP Berries',
  },
  {
    id: 'vip-celebration-trunk-2250',
    name: 'VIP Celebration Trunk',
    category: 'vip',
    categoryLabel: 'VIP Hamper',
    pieces: 28,
    weightGrams: 560,
    price: 2250,
    image: IMAGES.grandTrunk,
    description:
      'Handcrafted celebration trunk stocked with VIP dried raspberry and red currant chocolates, rock & truffle bars, all four nut-raisin classics, and satin ribbon wrapping.',
    contents: [
      'VIP Dried Raspberry & Red Currant Bars',
      'Rock, Truffle & Hazelnut-Almond-Pista-Raisin Mix',
      'Festive Satin Ribbon & Handwritten Card',
    ],
  },
  {
    id: 'vip-royal-chest-2850',
    name: 'VIP Royal Reserve Chest',
    category: 'vip',
    categoryLabel: 'VIP Hamper',
    pieces: 36,
    weightGrams: 740,
    price: 2850,
    image: IMAGES.hero,
    description:
      'Our grandest 36-piece VIP hamper featuring generous dried raspberry and red currant selections, truffles, rock chocolate, nutty varieties, and satin floral gift wrapping.',
    contents: [
      '36 Assorted VIP Pieces (Dried Raspberry & Red Currant Included)',
      'Rock, Truffle & Hazelnut-Almond-Pista-Raisin Assortment',
      'Festive Satin Ribbon & Handwritten Card',
    ],
    featuredNote: 'Grand VIP',
  },
];

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}/-`;
}

export function formatBagOrderMessage(
  items: BagItem[],
  packaging: PackagingOption,
  occasion: string,
  giftNote: string,
  customerName: string,
  deliveryDate: string,
  city: string
): string {
  const itemsSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const totalBoxes = items.reduce((sum, item) => sum + item.quantity, 0);
  const wrappingTotal = packaging.priceDelta * totalBoxes;
  const grandTotal = itemsSubtotal + wrappingTotal;

  const lines: string[] = [
    "Hello Bhati's Cacao Hearth Kitchen,",
    "I'd like to order the following homemade chocolate hampers:",
    '',
  ];

  items.forEach((item, index) => {
    lines.push(
      `${index + 1}. *${item.title}* x ${item.quantity} — ${formatINR(item.unitPrice * item.quantity)}`
    );
    lines.push(`   ${item.subtitle}`);
    if (item.details.length > 0) {
      item.details.forEach((detail) => lines.push(`   • ${detail}`));
    }
  });

  lines.push(
    '',
    `*Gift Wrapping:* ${packaging.name} (${wrappingTotal === 0 ? 'Included' : `+${formatINR(wrappingTotal)}`})`,
    `*Occasion:* ${occasion}`
  );

  if (giftNote.trim()) {
    lines.push(`*Gift Card Message:* "${giftNote.trim()}"`);
  }

  lines.push('', `*Order Total:* ${formatINR(grandTotal)}`);

  if (customerName.trim() || deliveryDate.trim() || city.trim()) {
    lines.push('');
    if (customerName.trim()) lines.push(`*Name:* ${customerName.trim()}`);
    if (deliveryDate.trim()) lines.push(`*Preferred Date:* ${deliveryDate.trim()}`);
    if (city.trim()) lines.push(`*Delivery Location:* ${city.trim()}`);
  }

  lines.push('', 'Looking forward to your confirmation!');
  return lines.join('\n');
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppShareUrl(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export function formatHamperShareMessage(hamper: SignatureHamper): string {
  return [
    `Check out this homemade chocolate hamper from *Bhati's Cacao Hearth Kitchen*:`,
    '',
    `*${hamper.name}* (${hamper.pieces} pcs · ${hamper.weightGrams}g) — *${formatINR(hamper.price)}*`,
    hamper.description,
    `Includes: ${hamper.contents.join(', ')}`,
    '',
    `Order directly on WhatsApp: ${WHATSAPP_DISPLAY}`,
    typeof window !== 'undefined' ? window.location.href : '',
  ]
    .filter(Boolean)
    .join('\n');
}
