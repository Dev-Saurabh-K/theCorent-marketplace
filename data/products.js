export const CATEGORIES = [
  { id: "all", label: "All Creations", count: 12 },
  { id: "cotton", label: "Organic Cotton", count: 3 },
  { id: "jute", label: "Hand-braided Jute", count: 3 },
  { id: "ceramics", label: "Terracotta & Clay", count: 3 },
  { id: "handicrafts", label: "Wood & Brass Crafts", count: 3 },
];

export const PRODUCTS = [
  {
    id: "prod-1",
    title: "Hand-spun Organic Cotton Waffle Throw",
    category: "cotton",
    categoryLabel: "Organic Cotton",
    price: 68.0,
    originalPrice: 85.0,
    rating: 4.9,
    reviewsCount: 142,
    artisan: {
      name: "Sunita Devi",
      region: "Jaipur, Rajasthan",
      craft: "Master Handloom Weaving",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    badges: ["100% Organic", "Hand-loomed", "Plant-Dyed"],
    inStock: true,
    isSustainable: true,
    description:
      "Spun from GOTS-certified organic desi cotton on traditional pit looms. Pre-washed with wild soapnuts for an exceptionally soft, breathable hand feel that softens with every wash.",
    materials: "100% GOTS Certified Organic Cotton, Wild Indigo & Madder Root dye",
    dimensions: "50\" x 70\" (127cm x 178cm)",
    heritageStory:
      "Woven over 18 hours using techniques passed through 4 generations of female weavers in the arid villages outside Sanganer.",
  },
  {
    id: "prod-2",
    title: "Raw Golden Jute Floor Basket with Leather Handles",
    category: "jute",
    categoryLabel: "Hand-braided Jute",
    price: 54.0,
    originalPrice: 65.0,
    rating: 4.8,
    reviewsCount: 98,
    artisan: {
      name: "Ratan Sen",
      region: "Nadia, West Bengal",
      craft: "Tosa Jute Braiding",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=800&q=80",
    badges: ["Zero Plastic", "Biodegradable", "Upcycled Leather"],
    inStock: true,
    isSustainable: true,
    description:
      "Hand-braided from sun-bleached riverbed jute fibres. Features vegetal-tanned repurposed saddle leather handles with solid hand-hammered brass rivets.",
    materials: "100% Natural River-grown Golden Jute, Vegetable-Tanned Upcycled Leather",
    dimensions: "14\" Diameter x 16\" Height (35cm x 40cm)",
    heritageStory:
      "Hand-coiled stitch-by-stitch by master braiders in the Bengal delta using harvest fibres retted in flowing natural rainwater.",
  },
  {
    id: "prod-3",
    title: "Wood-Fired Terracotta Amphora Vase",
    category: "ceramics",
    categoryLabel: "Terracotta & Clay",
    price: 48.0,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 86,
    artisan: {
      name: "Bhikshu Kumbhakar",
      region: "Patan, Gujarat",
      craft: "Traditional Wheel Pottery",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    badges: ["Wood-Fired", "Natural Mica Clay", "Lead-Free"],
    inStock: true,
    isSustainable: true,
    description:
      "Wheel-thrown from alluvial red clay enriched with natural mica flakes. Fired in an open-pit kiln fueled by fallen tamarind wood for rich natural smoky gradient hues.",
    materials: "Riverbed Terracotta Clay, Natural Mineral Slip Glaze",
    dimensions: "9.5\" Height x 6\" Width (24cm x 15cm)",
    heritageStory:
      "Every piece bears unique flame and ash markings from the wood kiln, meaning no two amphora vases are ever identical.",
  },
  {
    id: "prod-4",
    title: "Hand-Carved Reclaimed Sheesham Spice Box",
    category: "handicrafts",
    categoryLabel: "Wood & Brass Crafts",
    price: 62.0,
    originalPrice: 75.0,
    rating: 4.9,
    reviewsCount: 114,
    artisan: {
      name: "Mohammad Yusuf",
      region: "Saharanpur, Uttar Pradesh",
      craft: "Tarkashi & Jali Carving",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    badges: ["Reclaimed Wood", "Artisanal Joinery", "Food-Safe Beeswax"],
    inStock: true,
    isSustainable: true,
    description:
      "Carved from salvaged old-growth Indian Rosewood (Sheesham) with glass viewing lid and seven removable circular spice wells with handcrafted miniature brass spoon.",
    materials: "Reclaimed Sheesham Rosewood, Pure Brass Spoon, Organic Beeswax Polish",
    dimensions: "8.5\" x 8.5\" x 2.8\" (21cm x 21cm x 7cm)",
    heritageStory:
      "Crafted using century-old lap-joint woodworking methods without chemical glues or synthetic varnishes.",
  },
  {
    id: "prod-5",
    title: "Botanical Indigo Block-Print Lumbar Pillow",
    category: "cotton",
    categoryLabel: "Organic Cotton",
    price: 42.0,
    originalPrice: 50.0,
    rating: 4.7,
    reviewsCount: 73,
    artisan: {
      name: "Sunita Devi",
      region: "Jaipur, Rajasthan",
      craft: "Dabu Mud Resist Printing",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80",
    badges: ["Dabu Mud-Resist", "Fermented Indigo", "Brass Zipper"],
    inStock: true,
    isSustainable: true,
    description:
      "Printed by hand using hand-carved teak blocks dipped in fermented organic indigo vats. Backed with undyed natural flax linen and concealed antiqued brass zipper.",
    materials: "100% Rain-fed Cotton & Linen, Indigofera Tinctoria Vat Dye",
    dimensions: "14\" x 26\" (35cm x 66cm)",
    heritageStory:
      "The resist paste is prepared from local black clay, gum arabic, and wheat chaff before dipping 6 times into deep indigo vats.",
  },
  {
    id: "prod-6",
    title: "Hand-Knotted Golden Jute Round Rug (4ft)",
    category: "jute",
    categoryLabel: "Hand-braided Jute",
    price: 88.0,
    originalPrice: 110.0,
    rating: 4.9,
    reviewsCount: 167,
    artisan: {
      name: "Ratan Sen",
      region: "Nadia, West Bengal",
      craft: "Tosa Jute Braiding",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    badges: ["Thick Braid (12mm)", "Heavyweight", "Reversible"],
    inStock: true,
    isSustainable: true,
    description:
      "A statement centerpiece for bohemian and modern organic spaces. Hand-spun jute plies stitched with heavy hemp cord for longevity and barefoot comfort.",
    materials: "100% Unbleached Golden Jute, Natural Hemp Thread",
    dimensions: "48\" Diameter (122cm)",
    heritageStory:
      "Requires two master artisans working in tandem across three full days to coil and secure the symmetrical spiraling weave.",
  },
  {
    id: "prod-7",
    title: "Earthen Clay Slow-Cooker Handi with Lid",
    category: "ceramics",
    categoryLabel: "Terracotta & Clay",
    price: 52.0,
    originalPrice: 60.0,
    rating: 4.8,
    reviewsCount: 89,
    artisan: {
      name: "Bhikshu Kumbhakar",
      region: "Patan, Gujarat",
      craft: "Traditional Wheel Pottery",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    badges: ["Alkaline Neutralizer", "Microwave Safe", "Unglazed Pure Clay"],
    inStock: true,
    isSustainable: true,
    description:
      "Naturally alkaline clay retains food moisture and neutralizes acidity for tender stews, biryanis, and curries. Pre-cured with cold-pressed mustard oil and turmeric.",
    materials: "Raw Mineral Red Terracotta, Turmeric & Mustard Oil Sealant",
    dimensions: "2.5 Litre Capacity (8.5\" Diameter x 6\" Height)",
    heritageStory:
      "Pottery crafted according to Vedic culinary traditions which naturally retain 100% of steam nutrients during slow simmering.",
  },
  {
    id: "prod-8",
    title: "Hammered Kansa & Brass Artisanal Chai Set",
    category: "handicrafts",
    categoryLabel: "Wood & Brass Crafts",
    price: 78.0,
    originalPrice: 95.0,
    rating: 5.0,
    reviewsCount: 64,
    artisan: {
      name: "Mohammad Yusuf",
      region: "Saharanpur, Uttar Pradesh",
      craft: "Kansa Bronze Beating",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badges: ["78% Pure Copper", "22% Tin Bell Metal", "Heirloom Quality"],
    inStock: true,
    isSustainable: true,
    description:
      "Traditional bell-metal alloy (Kansa) celebrated in Ayurveda for gut health. Hand-hammered with thousands of precision strikes to produce an organic dimpled luster.",
    materials: "Authentic Bronze Alloy (78% Copper, 22% Tin)",
    dimensions: "Includes 2 Chai Kulhads (180ml each) & Serving Saucers",
    heritageStory:
      "Metals are smelted over charcoal fires and hand-beaten while red-hot, maintaining an ancient metallurgy lineage intact for 800 years.",
  },
  {
    id: "prod-9",
    title: "Kashmiri Hand-Embroidered Pashmina Silk Scarf",
    category: "cotton",
    categoryLabel: "Organic Cotton",
    price: 95.0,
    originalPrice: 120.0,
    rating: 4.9,
    reviewsCount: 204,
    artisan: {
      name: "Fatima Mir",
      region: "Srinagar, Kashmir",
      craft: "Sozni Needlepoint Embroidery",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    badges: ["Cruelty-Free Mulberry Silk", "Sozni Needlework", "Natural Walnut Dye"],
    inStock: true,
    isSustainable: true,
    description:
      "Ultra-fine gossamer blend of wild Ahimsa silk and hand-spun organic cotton with microscopic paisley border embroidery done with fine single-ply silk filaments.",
    materials: "50% Wild Peace Silk, 50% Organic Combed Cotton",
    dimensions: "28\" x 80\" (71cm x 203cm)",
    heritageStory:
      "Each scarf requires 35 days of meticulous needlepoint stitching beneath the Himalayan cedar trees of Srinagar.",
  },
  {
    id: "prod-10",
    title: "Braided Jute & Hemp Table Runner with Tassels",
    category: "jute",
    categoryLabel: "Hand-braided Jute",
    price: 32.0,
    originalPrice: null,
    rating: 4.6,
    reviewsCount: 52,
    artisan: {
      name: "Ratan Sen",
      region: "Nadia, West Bengal",
      craft: "Tosa Jute Braiding",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
    badges: ["Heat Resistant", "Unbleached Fibre", "Hand-tied Tassels"],
    inStock: true,
    isSustainable: true,
    description:
      "Rustic dining accent crafted with tight herringbone braiding. Protects dining surfaces from heat while introducing tactile organic texture to tablescapes.",
    materials: "Natural Unbleached Golden Jute, Raw Hemp Fringe",
    dimensions: "13\" x 72\" (33cm x 183cm)",
    heritageStory:
      "Woven on manual flatbed frames using jute harvested in Bengal monsoon season when fibres reach maximum tensile resilience.",
  },
  {
    id: "prod-11",
    title: "Rustic Stoneware Pour-Over Dripper & Mug",
    category: "ceramics",
    categoryLabel: "Terracotta & Clay",
    price: 45.0,
    originalPrice: 55.0,
    rating: 4.9,
    reviewsCount: 131,
    artisan: {
      name: "Bhikshu Kumbhakar",
      region: "Patan, Gujarat",
      craft: "Traditional Wheel Pottery",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badges: ["Cone 10 Fired", "Thermal Shock Tested", "Matte Pebble Glaze"],
    inStock: true,
    isSustainable: true,
    description:
      "Designed for morning mindfulness. Dual-piece coffee set with internal spiral extraction ribs paired with an ergonomic 320ml mug finished in satin stone glaze.",
    materials: "Iron-rich Stoneware Clay, Food-Grade Ash Glaze",
    dimensions: "Dripper (V02 fit), Mug: 3.5\" Diameter x 4\" Height",
    heritageStory:
      "Fired at 1280°C in high-efficiency downdraft kilns to vitrify the stone clay into durable everyday heirloom ceramics.",
  },
  {
    id: "prod-12",
    title: "Hand-Turned Wild Walnut Salad Bowl & Servers",
    category: "handicrafts",
    categoryLabel: "Wood & Brass Crafts",
    price: 82.0,
    originalPrice: 98.0,
    rating: 5.0,
    reviewsCount: 77,
    artisan: {
      name: "Mohammad Yusuf",
      region: "Saharanpur, Uttar Pradesh",
      craft: "Lathe Woodcraft",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    badges: ["Fallen Timber Only", "Single Monolith Carve", "Food Safe"],
    inStock: true,
    isSustainable: true,
    description:
      "Carved from naturally fallen storm timber. Monolithic seamless bowl with stunning marbled grain accompanied by contoured matching walnut serving paddle spoons.",
    materials: "Fallen Indian Wild Walnut Wood, Cold-Pressed Walnut Oil Finish",
    dimensions: "11\" Diameter x 4.5\" Depth (28cm x 11.5cm)",
    heritageStory:
      "Turned by hand on foot-powered treadle lathes, celebrating the organic knots and natural grain contours of aged Himalayan timber.",
  },
];
