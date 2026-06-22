export type MenuItem = {
  name: string;
  description: string;
  price: string;
  signature?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  italian: string;
  description: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "espresso",
    title: "Espresso Bar",
    italian: "Caffè",
    description: "Single-origin beans pulled on a vintage brass machine.",
    items: [
      { name: "Espresso", description: "A clean double shot. The benchmark.", price: "₹140" },
      { name: "Macchiato", description: "Espresso marked with a whisper of foam.", price: "₹160" },
      { name: "Cortado", description: "Equal parts espresso and warm milk.", price: "₹190" },
      { name: "Cappuccino", description: "Velvet milk, dusted with cocoa.", price: "₹220", signature: true },
      { name: "Flat White", description: "Microfoam over a ristretto base.", price: "₹240" },
      { name: "Affogato", description: "Vanilla bean gelato drowned in espresso.", price: "₹280" },
    ],
  },
  {
    id: "signature",
    title: "Belluno Signatures",
    italian: "Le Firme",
    description: "Slow-built drinks you'll only find on Vesu road.",
    items: [
      { name: "Verde Alpi", description: "Pistachio cream latte, sea salt, gold leaf.", price: "₹360", signature: true },
      { name: "Dolomiti Mocha", description: "70% dark chocolate, hazelnut, smoked salt.", price: "₹340" },
      { name: "Miele d'Oro", description: "Honey-saffron cortado with cardamom.", price: "₹320" },
      { name: "Bianco Notte", description: "White chocolate, vanilla bean, espresso.", price: "₹310" },
      { name: "Cold Brew Tonic", description: "24-hr cold brew, tonic, lemon zest.", price: "₹280" },
    ],
  },
  {
    id: "tea",
    title: "Tea & Botanicals",
    italian: "Infusi",
    description: "Loose-leaf and house tisanes, brewed by the cup.",
    items: [
      { name: "Earl Grey Cream", description: "Bergamot, vanilla, oat foam.", price: "₹220" },
      { name: "Masala Chai", description: "Cardamom, clove, ginger, jaggery.", price: "₹180" },
      { name: "Matcha Latte", description: "Ceremonial-grade, whisked.", price: "₹280" },
      { name: "Chamomile & Honey", description: "Slow steep, local wildflower honey.", price: "₹200" },
    ],
  },
  {
    id: "brunch",
    title: "All-Day Brunch",
    italian: "Cucina",
    description: "Served from morning to last light.",
    items: [
      { name: "Truffle Eggs", description: "Soft scramble, parmigiano, sourdough.", price: "₹420", signature: true },
      { name: "Avocado Toast", description: "Smashed avocado, chili oil, poached egg.", price: "₹380" },
      { name: "Burrata Plate", description: "Heirloom tomato, basil, focaccia.", price: "₹460" },
      { name: "Mushroom Bruschetta", description: "Wild mushrooms, thyme, ricotta.", price: "₹340" },
      { name: "Pesto Pasta", description: "House basil pesto, pine nuts, pecorino.", price: "₹440" },
    ],
  },
  {
    id: "dolci",
    title: "Pastries & Dolci",
    italian: "Dolci",
    description: "Baked in-house at dawn.",
    items: [
      { name: "Tiramisu", description: "Mascarpone, espresso, savoiardi.", price: "₹260", signature: true },
      { name: "Pistachio Croissant", description: "Sicilian pistachio cream, flaky butter.", price: "₹240" },
      { name: "Olive Oil Cake", description: "Citrus zest, sea salt, ricotta.", price: "₹220" },
      { name: "Cannoli", description: "Crisp shell, sweet ricotta, dark chocolate.", price: "₹200" },
      { name: "Almond Biscotti", description: "Twice-baked. Perfect with espresso.", price: "₹120" },
    ],
  },
];
