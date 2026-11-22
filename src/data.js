// SAELLE — the store's catalogue. Every product, its shelf and its look.
// kind = which procedural model builds it (products.js). look = colours for that model.

export const SECTIONS = [
  { id: "skin", n: "01", name: "Skincare", sub: "Serums, creams, toners" },
  { id: "scent", n: "02", name: "Fragrance", sub: "Eau de parfum bar" },
  { id: "colour", n: "03", name: "Makeup", sub: "Lips, face, eyes" },
  { id: "body", n: "04", name: "Hair & Body", sub: "Oils, wash, butters" },
];
export const SEC_BY_ID = Object.fromEntries(SECTIONS.map(s => [s.id, s]));

// slot: where it sits. wall bays use {wall:"L"|"R", bay:0..3, row:0|1}; tables use {table:"scent"|"body"|"entry", i}
export const PRODUCTS = [
  // ---------- skincare (left wall) ----------
  { id: "dew-serum", sec: "skin", slot: { wall: "L", bay: 0, row: 0 }, kind: "dropper", name: "Dew Drop Hyaluronic Serum", size: "30 ml", price: 1450,
    note: "Plumps and holds water for 24 hours.", look: { glass: "#eef4f6", liquid: "#dfeef2", cap: "#f3ece6", collar: "gold" } },
  { id: "night-serum", sec: "skin", slot: { wall: "L", bay: 0, row: 1 }, kind: "dropper", name: "Bakuchiol Night Serum", size: "30 ml", price: 1850,
    note: "A gentle retinol alternative for night.", look: { glass: "#b5732f", liquid: "#8a4a16", cap: "#1d1715", collar: "gold" } },
  { id: "cloud-cream", sec: "skin", slot: { wall: "L", bay: 1, row: 0 }, kind: "jar", name: "Barrier Cloud Cream", size: "50 ml", price: 1650,
    note: "Ceramides and squalane, for dry skin.", look: { glass: "#f4ece8", cream: "#fbf6f1", lid: "gold" } },
  { id: "rice-toner", sec: "skin", slot: { wall: "L", bay: 1, row: 1 }, kind: "toner", name: "Rice Water Toner", size: "150 ml", price: 950,
    note: "Fermented rice water, alcohol free.", look: { glass: "#f2f5f4", liquid: "#f1ede3", cap: "#c9a46a" } },
  { id: "glow-oil", sec: "skin", slot: { wall: "L", bay: 2, row: 0 }, kind: "dropper", name: "Vitamin C Glow Oil", size: "30 ml", price: 1290,
    note: "Brightens dull skin in two weeks.", look: { glass: "#f6efe3", liquid: "#f2a43a", cap: "#f6efe3", collar: "gold" } },
  { id: "milk-cleanser", sec: "skin", slot: { wall: "L", bay: 2, row: 1 }, kind: "pump", name: "Gentle Milk Cleanser", size: "200 ml", price: 890,
    note: "Oat milk wash for every skin type.", look: { body: "#ecd3c8", pump: "#f8f2ee", text: "#5a2e33" } },
  { id: "spf-50", sec: "skin", slot: { wall: "L", bay: 3, row: 0 }, kind: "tube", name: "Daily Shield SPF 50", size: "50 ml", price: 799,
    note: "No white cast, PA++++.", look: { body: "#f6e7c9", cap: "#e9b54a", text: "#5a2e33" } },
  { id: "lip-mask", sec: "skin", slot: { wall: "L", bay: 3, row: 1 }, kind: "jar", name: "Overnight Lip Mask", size: "15 g", price: 650,
    note: "Berry butter for soft lips by morning.", look: { glass: "#f2c9cf", cream: "#d9536d", lid: "rose", small: true } },

  // ---------- fragrance (centre bar) ----------
  { id: "jasmine-night", sec: "scent", slot: { table: "scent", i: 0 }, kind: "perfumeSquare", name: "No. 7 Jasmine Night", size: "50 ml EDP", price: 4800,
    note: "Jasmine sambac, tuberose, white musk.", look: { liquid: "#f3d98a", cap: "#15110f" } },
  { id: "oud-saffron", sec: "scent", slot: { table: "scent", i: 1 }, kind: "perfumeTall", name: "Oud & Saffron", size: "100 ml EDP", price: 6900,
    note: "Smoked oud, saffron, leather.", look: { liquid: "#a8521c", cap: "gold" } },
  { id: "rose-atelier", sec: "scent", slot: { table: "scent", i: 2 }, kind: "perfumeRound", name: "Rose Atelier", size: "50 ml EDP", price: 4500,
    note: "Damask rose, lychee, cedar.", look: { liquid: "#f4b9c2", cap: "rose" } },
  { id: "vetiver-rain", sec: "scent", slot: { table: "scent", i: 3 }, kind: "perfumeCyl", name: "Vetiver Rain", size: "75 ml EDP", price: 5200,
    note: "Vetiver, wet earth, grapefruit.", look: { liquid: "#cfe0b4", cap: "wood" } },
  { id: "neroli-bloom", sec: "scent", slot: { table: "scent", i: 4 }, kind: "perfumeSmall", name: "Neroli Bloom", size: "30 ml EDT", price: 2900,
    note: "Orange blossom and sea salt.", look: { liquid: "#fbf1d6", cap: "#f7f3ee" } },
  { id: "sandal-mist", sec: "scent", slot: { table: "scent", i: 5 }, kind: "mist", name: "Sandal Body Mist", size: "100 ml", price: 1200,
    note: "Mysore sandalwood, light all-day mist.", look: { liquid: "#f0d2a8", cap: "gold" } },

  // ---------- makeup (right wall) ----------
  { id: "lip-rosewood", sec: "colour", slot: { wall: "R", bay: 0, row: 0 }, kind: "lipstick", name: "Velvet Matte Lipstick · Rosewood", size: "3.5 g", price: 1150,
    note: "Soft-matte, 12 hour wear.", look: { shade: "#8e3b46" } },
  { id: "lip-sindoor", sec: "colour", slot: { wall: "R", bay: 0, row: 1 }, kind: "lipstick", name: "Velvet Matte Lipstick · Sindoor", size: "3.5 g", price: 1150,
    note: "A true red with a warm base.", look: { shade: "#b3121f" } },
  { id: "lip-petal", sec: "colour", slot: { wall: "R", bay: 1, row: 0 }, kind: "lipstick", name: "Satin Lipstick · Nude Petal", size: "3.5 g", price: 1150,
    note: "Your lips but better.", look: { shade: "#c98273", satin: true } },
  { id: "gloss", sec: "colour", slot: { wall: "R", bay: 1, row: 1 }, kind: "gloss", name: "Glass Lip Gloss", size: "6 ml", price: 750,
    note: "Mirror shine, not sticky.", look: { liquid: "#e88a9a" } },
  { id: "foundation", sec: "colour", slot: { wall: "R", bay: 2, row: 0 }, kind: "foundation", name: "Second Skin Foundation", size: "30 ml · 24 shades", price: 1750,
    note: "Medium cover, natural finish.", look: { liquid: "#c58e66", cap: "#141012" } },
  { id: "palette", sec: "colour", slot: { wall: "R", bay: 2, row: 1 }, kind: "palette", name: "Sunset Eyeshadow Palette", size: "12 shades", price: 2400,
    note: "Mattes and shimmers in warm tones.", look: { shell: "#2a1d1f", pans: ["#f1d3b8", "#d8a07a", "#b5643c", "#7a3424", "#e2b45c", "#c77d5e", "#8c4a5c", "#4b2a2a", "#f4c6a8", "#a35d3b", "#d79b7f", "#2b1a17"] } },
  { id: "blush", sec: "colour", slot: { wall: "R", bay: 3, row: 0 }, kind: "compact", name: "Cheek Flush Blush", size: "6 g", price: 1050,
    note: "Buildable, blends with fingers.", look: { shell: "#e7c4bb", pan: "#e08a86" } },
  { id: "mascara", sec: "colour", slot: { wall: "R", bay: 3, row: 1 }, kind: "mascara", name: "Lash Lift Mascara", size: "9 ml", price: 890,
    note: "Lifts and holds curl, no clumps.", look: { body: "#131012", cap: "gold" } },

  // ---------- hair & body (back table) ----------
  { id: "hair-oil", sec: "body", slot: { table: "body", i: 0 }, kind: "oil", name: "Bhringraj Hair Oil", size: "100 ml", price: 890,
    note: "Cold-pressed, for stronger roots.", look: { glass: "#7b4412", liquid: "#6f3a10", cap: "gold" } },
  { id: "shampoo", sec: "body", slot: { table: "body", i: 1 }, kind: "bottle", name: "Silk Repair Shampoo", size: "250 ml", price: 950,
    note: "Sulphate-free, for frizzy hair.", look: { body: "#e9dcd2", cap: "#5a2e33", text: "#5a2e33" } },
  { id: "conditioner", sec: "body", slot: { table: "body", i: 2 }, kind: "bottle", name: "Silk Repair Conditioner", size: "250 ml", price: 950,
    note: "Detangles in one minute.", look: { body: "#5a2e33", cap: "#e9dcd2", text: "#f3e6dc" } },
  { id: "ubtan-scrub", sec: "body", slot: { table: "body", i: 3 }, kind: "tub", name: "Ubtan Body Scrub", size: "200 g", price: 1100,
    note: "Turmeric, besan and sandalwood.", look: { body: "#d9a441", lid: "gold", text: "#3b2412" } },
  { id: "body-butter", sec: "body", slot: { table: "body", i: 4 }, kind: "tub", name: "Shea Body Butter", size: "200 g", price: 1250,
    note: "48 hour moisture, light scent.", look: { body: "#f1e6dc", lid: "#e2c9b9", text: "#5a2e33" } },
  { id: "hand-cream", sec: "body", slot: { table: "body", i: 5 }, kind: "tube", name: "Kesar Hand Cream", size: "50 ml", price: 550,
    note: "Saffron and almond oil.", look: { body: "#efc77a", cap: "gold", text: "#5a2e33" } },

  // ---------- new launch (entrance table) ----------
  { id: "glow-set", sec: "skin", slot: { table: "entry", i: 0 }, kind: "dropper", name: "Glow Ritual Serum · New", size: "30 ml", price: 2250,
    note: "Niacinamide 10% with rose water.", look: { glass: "#f3c6cf", liquid: "#f0b1bd", cap: "#f7efe9", collar: "gold" }, hero: true },
];
export const BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));

// guided tour: product ids to visit, in order; "desk" ends at the checkout
export const TOUR = [
  ["glow-set"],
  ["dew-serum", "cloud-cream"],
  ["glow-oil", "spf-50"],
  ["jasmine-night", "rose-atelier"],
  ["lip-sindoor", "palette"],
  ["foundation", "mascara"],
  ["hair-oil", "ubtan-scrub"],
  "desk",
];

export const fmt = v => "₹" + v.toLocaleString("en-IN");

// longer copy for the product page: what it is, how to use it, what's in it
export const DETAILS = {
  "dew-serum": ["A water-light serum with three weights of hyaluronic acid that sink in at different depths, so skin stays plump from morning to night.", "Press 3–4 drops into damp skin, morning and night, before cream.", "Hyaluronic acid, panthenol, glycerin"],
  "night-serum": ["Bakuchiol smooths fine lines and evens tone like retinol does, without the redness, so it suits sensitive skin and every season.", "Use 3 drops at night on clean skin. Follow with SPF in the morning.", "Bakuchiol 1%, squalane, rosehip oil"],
  "cloud-cream": ["A whipped cream that rebuilds a dry, tight skin barrier with ceramides and leaves a soft, non-greasy finish.", "Smooth a pea-sized amount over face and neck as the last step.", "Ceramide NP, squalane, shea butter"],
  "rice-toner": ["Fermented rice water softens and brightens, preparing skin to take in serum. No alcohol, no fragrance.", "Pat onto skin with your palms after cleansing.", "Fermented rice water, niacinamide, allantoin"],
  "glow-oil": ["A dry-touch facial oil with stable vitamin C that wakes up dull skin. Most people see a brighter tone within two weeks.", "Warm 2–3 drops in your palms and press over the face at night.", "Ethyl ascorbic acid, sea buckthorn, jojoba"],
  "milk-cleanser": ["A low-foam milk wash that lifts sunscreen and the day's dust without leaving skin tight.", "Massage over damp skin for 30 seconds, then rinse.", "Oat milk, glycerin, mild coco-glucoside"],
  "spf-50": ["Broad-spectrum SPF 50 PA++++ that leaves no white cast on any skin tone and sits well under makeup.", "Apply two finger-lengths as the last step of your morning routine. Reapply every 2–3 hours outdoors.", "Zinc oxide, tinosorb S, niacinamide"],
  "lip-mask": ["A rich berry butter that melts into cracked lips overnight. By morning they feel smooth again.", "Apply a thick layer before bed.", "Shea butter, murumuru, vitamin E"],
  "jasmine-night": ["Night-blooming jasmine over warm amber and a trace of vanilla. A soft, close scent that lasts all evening.", "Spray on pulse points from 15 cm away.", "Top: bergamot · Heart: jasmine sambac · Base: amber, vanilla"],
  "oud-saffron": ["Smoky oud warmed by Kashmiri saffron and rose. Rich and deep, made for winter evenings.", "One or two sprays are enough. It projects for hours.", "Top: saffron · Heart: rose, leather · Base: oud, patchouli"],
  "rose-atelier": ["A modern rose, dewy and green rather than powdery, with pink pepper and clean musk.", "Spray on skin and clothes for a longer trail.", "Top: pink pepper · Heart: Turkish rose · Base: white musk"],
  "vetiver-rain": ["Earthy vetiver after the first monsoon rain, with a crisp grapefruit opening. Fresh, calm and unisex.", "Spray after a shower on warm skin.", "Top: grapefruit · Heart: petrichor accord · Base: vetiver, cedar"],
  "neroli-bloom": ["Bright orange blossom and neroli in a light eau de toilette. An easy daytime scent.", "Spray generously. Reapply through the day.", "Top: neroli, mandarin · Heart: orange blossom · Base: musk"],
  "sandal-mist": ["A light all-over mist of creamy sandalwood that fades softly through the day.", "Mist over body and hair after bathing.", "Sandalwood, aloe, glycerin"],
  "lip-rosewood": ["A soft-matte rosewood brown that feels like nothing on the lips and does not dry them out.", "Apply straight from the bullet. Blot once for a stained look.", "Shea butter, jojoba esters, pigment"],
  "lip-sindoor": ["A true sindoor red with a velvet matte finish, rich in colour from the first swipe.", "Line with the tip first, then fill in.", "Shea butter, jojoba esters, pigment"],
  "lip-petal": ["A satin nude with a slight sheen that suits deeper and fairer skin alike.", "Wear alone or over lip liner.", "Castor seed oil, vitamin E, pigment"],
  "gloss": ["A glass-clear high-shine gloss that is not sticky. Wear it alone or over lipstick.", "One coat from the centre of the lips outward.", "Polyisobutene, rosehip oil"],
  "foundation": ["A medium-coverage foundation that looks like skin, with 24 shades built for Indian undertones.", "Dot on and blend with fingertips or a damp sponge.", "Hyaluronic acid, niacinamide, SPF 20"],
  "palette": ["Twelve sunset shades in matte, shimmer and metallic, from soft peach to deep plum.", "Pat shimmers on with a fingertip, blend mattes with a brush.", "Mica, talc-free base"],
  "blush": ["A buildable rose blush that melts into skin for a natural flush.", "Tap lightly and sweep up along the cheekbones.", "Squalane, silica, pigment"],
  "mascara": ["A lifting, lengthening mascara that holds the curl all day and does not flake.", "Wiggle from the root to the tips. Add a second coat while wet.", "Carnauba wax, panthenol"],
  "hair-oil": ["A traditional bhringraj and amla oil, light enough to leave on overnight, for stronger and shinier hair.", "Massage into the scalp, leave 1 hour or overnight, then wash.", "Bhringraj, amla, coconut and sesame oils"],
  "shampoo": ["A gentle sulphate-free wash that repairs dry, coloured hair with silk protein.", "Lather into wet hair, rinse, and repeat if needed.", "Hydrolysed silk, argan oil"],
  "conditioner": ["Detangles and smooths, with silk protein for shine.", "Comb through the lengths, leave 2 minutes, then rinse.", "Hydrolysed silk, shea butter"],
  "ubtan-scrub": ["A classic ubtan of gram flour, turmeric and sandal, as a gentle weekly polish for glowing skin.", "Massage over damp skin in circles, then rinse.", "Besan, turmeric, sandalwood, walnut shell"],
  "body-butter": ["A dense shea butter that softens dry elbows, knees and heels overnight.", "Warm between the palms and smooth over damp skin.", "Shea butter, cocoa butter, almond oil"],
  "hand-cream": ["A fast-absorbing hand cream scented with saffron. It leaves hands soft and not greasy.", "Use as often as you like.", "Saffron extract, glycerin, shea butter"],
  "glow-set": ["Our newest serum, with niacinamide 10% and rose water, that smooths texture and fades dark spots.", "Use 3 drops morning and night after toner.", "Niacinamide 10%, zinc, rose water"],
};
export const PRICE_BANDS = [
  { id: "all", label: "Any price", test: () => true },
  { id: "u1", label: "Under ₹1,000", test: p => p.price < 1000 },
  { id: "1to2", label: "₹1,000–2,000", test: p => p.price >= 1000 && p.price <= 2000 },
  { id: "o2", label: "Over ₹2,000", test: p => p.price > 2000 },
];
