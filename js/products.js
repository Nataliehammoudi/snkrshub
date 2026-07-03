// SNKRS HUB — product catalogue
// Swap the image URLs for real product photography before launch.
// Each colorway holds its own image so the gallery can switch on click.

const PRODUCTS = [
  {
    id: "aero-runner",
    name: "Aero Runner",
    category: "men",
    badge: "New",
    price: 42,
    description:
      "A lightweight daily trainer with a responsive foam sole and a breathable knit upper. Cleaned, inspected and ready to ship same week.",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      {
        name: "Cloud White",
        hex: "#f2efe9",
        images: [
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Blackout",
        hex: "#141414",
        images: [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "court-classic",
    name: "Court Classic",
    category: "men",
    badge: "Restock",
    price: 38,
    description:
      "The everyday court silhouette. Full-grain leather panels, rubber cupsole, broken in just enough to feel right on day one.",
    sizes: [40, 41, 42, 43, 44],
    colors: [
      {
        name: "Bone",
        hex: "#e7e0d2",
        images: [
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Crimson",
        hex: "#b3271e",
        images: [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "street-mid",
    name: "Street Mid",
    category: "men",
    badge: "",
    price: 45,
    description:
      "Mid-top silhouette built for the block, not the treadmill. Padded collar, canvas body, a sole that grips wet pavement.",
    sizes: [41, 42, 43, 44, 45, 46],
    colors: [
      {
        name: "Olive",
        hex: "#4b5320",
        images: [
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Jet Black",
        hex: "#0e0e0e",
        images: [
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "featherweight",
    name: "Featherweight",
    category: "women",
    badge: "New",
    price: 40,
    description:
      "Built for people who walk the city all day. Sock-fit ankle, molded midsole, barely-there weight on the foot.",
    sizes: [36, 37, 38, 39, 40],
    colors: [
      {
        name: "Blush",
        hex: "#d8a7a1",
        images: [
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Chalk",
        hex: "#eae6dd",
        images: [
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "trail-edge",
    name: "Trail Edge",
    category: "women",
    badge: "Sale",
    price: 35,
    originalPrice: 46,
    description:
      "An off-road sole with real lug depth, wrapped in a runner's upper. Made for the gravel paths past the last bus stop.",
    sizes: [36, 37, 38, 39, 40, 41],
    colors: [
      {
        name: "Forest",
        hex: "#1f7a4d",
        images: [
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Slate",
        hex: "#4a4f55",
        images: [
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "junior-dash",
    name: "Junior Dash",
    category: "kids",
    badge: "",
    price: 22,
    description:
      "Velcro strap, reinforced toe, a sole that survives the playground. Sized for growing feet, priced for growing families.",
    sizes: [30, 31, 32, 33, 34, 35],
    colors: [
      {
        name: "Sky",
        hex: "#5b8cb8",
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Sunburst",
        hex: "#f2c14e",
        images: [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "flex-knit",
    name: "Flex Knit",
    category: "women",
    badge: "New",
    price: 44,
    description:
      "A stretch-knit upper that moves with the foot, on a foam stack tuned for standing shifts and long errands alike.",
    sizes: [36, 37, 38, 39, 40, 41],
    colors: [
      {
        name: "Rose",
        hex: "#c9707a",
        images: [
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Ink",
        hex: "#1c1f26",
        images: [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    id: "heritage-eighty",
    name: "Heritage Eighty",
    category: "men",
    badge: "Sale",
    price: 33,
    originalPrice: 41,
    description:
      "A retro court shape brought back from the archive. Vulcanised sole, waxed laces, a shoe that looks better lived-in.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: [
      {
        name: "Cream",
        hex: "#efe7d8",
        images: [
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        name: "Navy",
        hex: "#232f45",
        images: [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  }
];

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
