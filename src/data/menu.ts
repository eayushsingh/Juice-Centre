export type MenuCategory =
    | "Fresh Fruit Juices"
    | "Milkshakes"
    | "Signature Malai Desserts"
    | "Fruit Cream Specials"
    | "Seasonal Specials"
    | "Dry Fruit Cream"
    | "Dry Fruit Shakes"
    | "Mocktails"
    | "Nice Spl"
    | "Lassi"
    | "Chat"
    | "Grill Sandwich"
    | "Shawarma"

export interface MenuItem {
    id: number
    name: string
    category: MenuCategory
    price: number | null
    popular?: boolean
    image: string
}

export const menuItems: MenuItem[] = [

    // ── FRESH FRUIT JUICES ──
    { id: 1, name: "Mosambi", category: "Fresh Fruit Juices", price: 70, image: "/images/menu/mosambi.jpg" },
    { id: 2, name: "Pineapple", category: "Fresh Fruit Juices", price: 70, image: "/images/menu/pineapple.jpg" },
    { id: 3, name: "Grapes", category: "Fresh Fruit Juices", price: 70, image: "/images/menu/grapes.jpg" },
    { id: 4, name: "Coctail", category: "Fresh Fruit Juices", price: 70, image: "/images/menu/coctail.jpg" },
    { id: 5, name: "Watermellon", category: "Fresh Fruit Juices", price: 50, image: "/images/menu/watermelon.jpg" },
    { id: 6, name: "Anar", category: "Fresh Fruit Juices", price: 100, image: "/images/menu/anar.jpg" },
    { id: 7, name: "Kiwi", category: "Fresh Fruit Juices", price: 80, image: "/images/menu/kiwi.jpg" },
    { id: 8, name: "3 Shots", category: "Fresh Fruit Juices", price: 80, image: "/images/menu/shots.jpg" },
    { id: 9, name: "Maramari", category: "Fresh Fruit Juices", price: 80, image: "/images/menu/placeholder.png" },

    // ── SEASONAL SPECIALS ──
    { id: 10, name: "Seetaphal Milkshake", category: "Seasonal Specials", price: 100, image: "/images/menu/seetaphal.jpg" },
    { id: 11, name: "Litchee Milkshake", category: "Seasonal Specials", price: 100, image: "/images/menu/litchee.jpg" },
    { id: 12, name: "Jamun Juice", category: "Seasonal Specials", price: 100, image: "/images/menu/jamun.jpg" },
    { id: 13, name: "Falasa", category: "Seasonal Specials", price: 100, image: "/images/menu/placeholder.png" },
    { id: 14, name: "Mango Milkshake", category: "Seasonal Specials", price: 100, image: "/images/menu/mango.jpg", popular: true },
    { id: 15, name: "Dream Strawberry", category: "Seasonal Specials", price: 120, image: "/images/menu/strawberry.jpg" },
    { id: 16, name: "Cream Strawberry", category: "Seasonal Specials", price: 120, image: "/images/menu/placeholder.png" },

    // ── MILKSHAKES ──
    { id: 17, name: "Apple Milkshake", category: "Milkshakes", price: 70, image: "/images/menu/apple.jpg" },
    { id: 18, name: "Chickoo Milkshake", category: "Milkshakes", price: 70, image: "/images/menu/chikoo.jpg", popular: true },
    { id: 19, name: "Muskmellon Milkshake", category: "Milkshakes", price: 70, image: "/images/menu/muskmelon.jpg" },
    { id: 20, name: "Banana Milkshake", category: "Milkshakes", price: 60, image: "/images/menu/banana.jpg" },
    { id: 21, name: "Papaya Milkshake", category: "Milkshakes", price: 60, image: "/images/menu/papaya.jpg" },
    { id: 22, name: "Coctail Milkshake", category: "Milkshakes", price: 100, image: "/images/menu/coctail.jpg" },
    { id: 23, name: "Strawberry Milkshake", category: "Milkshakes", price: 100, image: "/images/menu/strawberry.jpg", popular: true },
    { id: 24, name: "Litchee Milkshake", category: "Milkshakes", price: 100, image: "/images/menu/litchee.jpg" },
    { id: 25, name: "Chocolate With Icecream", category: "Milkshakes", price: 90, image: "/images/menu/chocolate.jpg" },
    { id: 26, name: "Vanilla With Icecream", category: "Milkshakes", price: 90, image: "/images/menu/vanilla.jpg" },
    { id: 27, name: "Mulberry Shake", category: "Milkshakes", price: 100, image: "/images/menu/mulberry.jpg" },
    { id: 28, name: "Dragon Shake", category: "Milkshakes", price: 100, image: "/images/menu/dragon.jpg" },
    { id: 29, name: "Blackcurrent Shake", category: "Milkshakes", price: 100, image: "/images/menu/blackcurrent.jpg" },

    // ── DRY FRUIT SHAKES ──
    { id: 30, name: "Kaju Badam", category: "Dry Fruit Shakes", price: 200, image: "/images/menu/kajubadam.jpg", popular: true },
    { id: 31, name: "Pure Kaju", category: "Dry Fruit Shakes", price: 200, image: "/images/menu/purekaju.jpg" },
    { id: 32, name: "Spl Pure Badam", category: "Dry Fruit Shakes", price: 220, image: "/images/menu/badam.jpg" },
    { id: 33, name: "Dry Fruit Mixed", category: "Dry Fruit Shakes", price: 240, image: "/images/menu/dryfruitmixed.jpg" },
    { id: 34, name: "Dry Fruit Small", category: "Dry Fruit Shakes", price: 120, image: "/images/menu/placeholder.png" },
    { id: 35, name: "Dates Banana", category: "Dry Fruit Shakes", price: 100, image: "/images/menu/dates.jpg" },
    { id: 36, name: "Dates Shake", category: "Dry Fruit Shakes", price: 100, image: "/images/menu/placeholder.png" },
    { id: 37, name: "Badam Anjeer", category: "Dry Fruit Shakes", price: 200, image: "/images/menu/placeholder.png" },
    { id: 38, name: "Kaju Badam Pista", category: "Dry Fruit Shakes", price: 280, image: "/images/menu/placeholder.png" },

    // ── MOCKTAILS ──
    { id: 39, name: "Mixed Moctail", category: "Mocktails", price: 90, image: "/images/menu/mocktail.jpg" },
    { id: 40, name: "Kiwi Limi", category: "Mocktails", price: 90, image: "/images/menu/kiwilimi.jpg" },
    { id: 41, name: "Strawberry Moctail", category: "Mocktails", price: 90, image: "/images/menu/placeholder.png" },
    { id: 42, name: "Litchee Moctail", category: "Mocktails", price: 90, image: "/images/menu/placeholder.png" },

    // ── DRY FRUIT CREAM ──
    { id: 43, name: "Warm Up Gold Half", category: "Dry Fruit Cream", price: 160, image: "/images/menu/placeholder.png" },
    { id: 44, name: "Pista Gold Half", category: "Dry Fruit Cream", price: 160, image: "/images/menu/placeholder.png" },
    { id: 45, name: "Panjeer Gold Half", category: "Dry Fruit Cream", price: 210, image: "/images/menu/placeholder.png" },
    { id: 46, name: "Khajoor Badam Gold", category: "Dry Fruit Cream", price: 320, image: "/images/menu/placeholder.png" },
    { id: 47, name: "Chilgooza Small", category: "Dry Fruit Cream", price: 450, image: "/images/menu/placeholder.png" },
    { id: 48, name: "Chilgooza Large", category: "Dry Fruit Cream", price: 900, image: "/images/menu/placeholder.png" },
    { id: 49, name: "Mushakkal Half", category: "Dry Fruit Cream", price: 180, image: "/images/menu/placeholder.png" },
    { id: 50, name: "Mushakkal Large", category: "Dry Fruit Cream", price: 320, image: "/images/menu/placeholder.png" },
    { id: 51, name: "Nakeel Half", category: "Dry Fruit Cream", price: 120, image: "/images/menu/placeholder.png" },
    { id: 52, name: "Zal-Za-La (Half)", category: "Dry Fruit Cream", price: 300, image: "/images/menu/placeholder.png" },
    { id: 53, name: "Zal-Za-Zl (Full)", category: "Dry Fruit Cream", price: 400, image: "/images/menu/placeholder.png" },

    // ── NICE SPL ──
    { id: 54, name: "Avacado (Butter Fruit)", category: "Nice Spl", price: 120, image: "/images/menu/avacado.jpg", popular: true },
    { id: 55, name: "Spl Avacado", category: "Nice Spl", price: 150, image: "/images/menu/placeholder.png" },
    { id: 56, name: "Avacado Mango", category: "Nice Spl", price: 140, image: "/images/menu/placeholder.png" },
    { id: 57, name: "Avacado Mulberry", category: "Nice Spl", price: 140, image: "/images/menu/placeholder.png" },
    { id: 58, name: "Purple Blast", category: "Nice Spl", price: 140, image: "/images/menu/placeholder.png" },
    { id: 59, name: "Blue Very Berry", category: "Nice Spl", price: 140, image: "/images/menu/placeholder.png" },
    { id: 60, name: "Make Me Awsome", category: "Nice Spl", price: 140, image: "/images/menu/placeholder.png" },
    { id: 61, name: "Litchee Gold", category: "Nice Spl", price: 130, image: "/images/menu/placeholder.png" },
    { id: 62, name: "Fruit Punch", category: "Nice Spl", price: 120, image: "/images/menu/placeholder.png" },
    { id: 63, name: "Dragon Punch", category: "Nice Spl", price: 140, image: "/images/menu/placeholder.png" },
    { id: 64, name: "Creamy Kaju Punch", category: "Nice Spl", price: 120, image: "/images/menu/placeholder.png" },

    // ── SIGNATURE MALAI DESSERTS ──
    { id: 65, name: "Mulberry Malai", category: "Signature Malai Desserts", price: 150, image: "/images/menu/mulberrymalai.jpg", popular: true },
    { id: 66, name: "Mango Malai", category: "Signature Malai Desserts", price: 180, image: "/images/menu/mangomalai.jpg" },
    { id: 67, name: "Seetaphal Malai", category: "Signature Malai Desserts", price: 180, image: "/images/menu/placeholder.png" },
    { id: 68, name: "Litchee Malai", category: "Signature Malai Desserts", price: 200, image: "/images/menu/placeholder.png" },
    { id: 69, name: "Strawberry Malai", category: "Signature Malai Desserts", price: 150, image: "/images/menu/placeholder.png" },
    { id: 70, name: "Mango+Berres", category: "Signature Malai Desserts", price: 200, image: "/images/menu/placeholder.png" },
    { id: 71, name: "Litchee+Mulberry", category: "Signature Malai Desserts", price: 200, image: "/images/menu/placeholder.png" },
    { id: 72, name: "Apricot Cream (D/F)", category: "Signature Malai Desserts", price: 150, image: "/images/menu/placeholder.png" },
    { id: 73, name: "Chocolate Malai", category: "Signature Malai Desserts", price: 150, image: "/images/menu/placeholder.png" },
    { id: 74, name: "Date's Banana Malai", category: "Signature Malai Desserts", price: 150, image: "/images/menu/placeholder.png" },
    { id: 75, name: "Fruit Mandi", category: "Signature Malai Desserts", price: 160, image: "/images/menu/fruitbowl.jpg", popular: true },

    // ── FRUIT CREAM SPECIALS ──
    { id: 76, name: "Fruit Salad", category: "Fruit Cream Specials", price: 100, image: "/images/menu/fruitsalad.jpg" },
    { id: 77, name: "Fruit Salad With D/F", category: "Fruit Cream Specials", price: 120, image: "/images/menu/placeholder.png" },
    { id: 78, name: "Dry Fruit Salad", category: "Fruit Cream Specials", price: 280, image: "/images/menu/placeholder.png" },
    { id: 79, name: "Malai Salad", category: "Fruit Cream Specials", price: 150, image: "/images/menu/placeholder.png" },
    { id: 80, name: "Spl Mid Night Salad", category: "Fruit Cream Specials", price: 200, image: "/images/menu/placeholder.png" },
    { id: 81, name: "Cut Fruit Bowl", category: "Fruit Cream Specials", price: 100, image: "/images/menu/placeholder.png" },

    // ── LASSI ──
    { id: 82, name: "Lassi", category: "Lassi", price: 60, image: "/images/menu/lassi.jpg" },
    { id: 83, name: "Special Lassi", category: "Lassi", price: 80, image: "/images/menu/placeholder.png" },
    { id: 84, name: "Mango Lassi", category: "Lassi", price: 80, image: "/images/menu/placeholder.png" },
    { id: 85, name: "Strawberry Lassi", category: "Lassi", price: 80, image: "/images/menu/placeholder.png" },
    { id: 86, name: "Mix Fruit Lassi", category: "Lassi", price: 70, image: "/images/menu/placeholder.png" },

    // ── CHAT ──
    { id: 87, name: "Pani Puri", category: "Chat", price: 25, image: "/images/menu/panipuri.jpg" },
    { id: 88, name: "Bhel Puri", category: "Chat", price: 50, image: "/images/menu/placeholder.png" },
    { id: 89, name: "Sev Puri", category: "Chat", price: 50, image: "/images/menu/placeholder.png" },
    { id: 90, name: "Masala Puri", category: "Chat", price: 50, image: "/images/menu/placeholder.png" },
    { id: 91, name: "Ragda Cutlet", category: "Chat", price: 70, image: "/images/menu/placeholder.png" },
    { id: 92, name: "Ragda Samosa", category: "Chat", price: 70, image: "/images/menu/placeholder.png" },
    { id: 93, name: "Ragda Papdi", category: "Chat", price: 70, image: "/images/menu/placeholder.png" },
    { id: 94, name: "Dahi Puri", category: "Chat", price: 70, image: "/images/menu/placeholder.png" },
    { id: 95, name: "Dahi Papdi", category: "Chat", price: 70, image: "/images/menu/placeholder.png" },
    { id: 96, name: "Pav Bhaji", category: "Chat", price: 90, image: "/images/menu/pavbhaji.jpg" },
    { id: 97, name: "Butter Pav Bhaji", category: "Chat", price: 110, image: "/images/menu/placeholder.png" },
    { id: 98, name: "Cheese Pav Bhaji", category: "Chat", price: 110, image: "/images/menu/placeholder.png" },
    { id: 99, name: "Spl Pav Bhaji", category: "Chat", price: 110, image: "/images/menu/placeholder.png" },
    { id: 100, name: "Extra Pav", category: "Chat", price: 20, image: "/images/menu/placeholder.png" },

    // ── GRILL SANDWICH ──
    { id: 101, name: "Bread Butter Cheese", category: "Grill Sandwich", price: 70, image: "/images/menu/sandwich.jpg" },
    { id: 102, name: "Veg Grill Sandwich", category: "Grill Sandwich", price: 90, image: "/images/menu/placeholder.png" },
    { id: 103, name: "Veg Cheese Grill Sandwich", category: "Grill Sandwich", price: 110, image: "/images/menu/placeholder.png" },
    { id: 104, name: "Veg Creamy Cheese Grill", category: "Grill Sandwich", price: 130, image: "/images/menu/placeholder.png" },
    { id: 105, name: "Kaju Cheese Grill", category: "Grill Sandwich", price: 130, image: "/images/menu/placeholder.png" },
    { id: 106, name: "Chilli Cheese Grill", category: "Grill Sandwich", price: 100, image: "/images/menu/placeholder.png" },
    { id: 107, name: "Paneer Cheese Grill", category: "Grill Sandwich", price: 130, image: "/images/menu/placeholder.png" },
    { id: 108, name: "Chicken Grill Sandwich", category: "Grill Sandwich", price: 100, image: "/images/menu/placeholder.png" },
    { id: 109, name: "Chicken Chilli Grill", category: "Grill Sandwich", price: 110, image: "/images/menu/placeholder.png" },
    { id: 110, name: "Chicken Cheese Grill", category: "Grill Sandwich", price: 120, image: "/images/menu/placeholder.png" },

    // ── SHAWARMA ──
    { id: 111, name: "Arabian Shawarma", category: "Shawarma", price: 100, image: "/images/menu/shawarma.jpg", popular: true },
    { id: 112, name: "Spl Shawarma", category: "Shawarma", price: 120, image: "/images/menu/placeholder.png" },
    { id: 113, name: "Spicy Shawarma", category: "Shawarma", price: 110, image: "/images/menu/placeholder.png" },
    { id: 114, name: "Spl Arabian Platter", category: "Shawarma", price: 200, image: "/images/menu/placeholder.png" },
    { id: 115, name: "Extra Mayonise", category: "Shawarma", price: 20, image: "/images/menu/placeholder.png" },
]

// Helper to get all unique categories in display order
export const menuCategories: MenuCategory[] = [
    "Fresh Fruit Juices",
    "Milkshakes",
    "Signature Malai Desserts",
    "Fruit Cream Specials",
    "Seasonal Specials",
    "Dry Fruit Cream",
    "Dry Fruit Shakes",
    "Mocktails",
    "Nice Spl",
    "Lassi",
    "Chat",
    "Grill Sandwich",
    "Shawarma",
]

// Helper to get popular items only
export const popularItems = menuItems.filter(i => i.popular)
