export interface Branch {
    id: number;
    name: string;
    tag: string;
    address: string;
    specialty: string;
    hours: string;
    status: string;
    badge: string;
    badgeColor: string;
    phone: string;
    whatsapp: string;
    mapLink: string;
    mapEmbed: string;
    image: string;
    emoji: string;
    highlight: boolean;
    imagePosition?: string;
}

export const branches: Branch[] = [
    {
        id: 1,
        name: "Nice Juice Centre – MG Road",
        tag: "Original Branch Since 1986",
        badge: "🏆 Flagship",
        badgeColor: "#FF6B00",
        address: "2-4-64, MG Road, Beside KFC Restaurant, Secunderabad, Telangana 500003, India",
        specialty: "Famous for being the original store. Known for Mango Cream and seasonal fruit shakes.",
        hours: "9:00 AM – 1:00 AM",
        status: "open",
        phone: "+91 86392 71639",
        whatsapp: "918639271639",
        mapLink: "https://maps.google.com/?q=17.4357838,78.4883428",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.1!2d78.4883428!3d17.4357838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzA4LjgiTiA3OMKwMjknMTguMCJF!5e0!3m2!1sen!2sin!4v1",
        image: "/Nice Juice Centre – MG Road.webp",
        emoji: "🏪",
        highlight: true,
        imagePosition: "center 20%",
    },
    {
        id: 2,
        name: "Nice Juice Centre – Tolichowki",
        tag: "Premium Main Branch",
        badge: "🌙 Late Night",
        badgeColor: "#22C55E",
        address: "H.No. 9, 4-86/4/3, Yousuf Tekri, Tolichowki, Hyderabad, Telangana 500008, India",
        specialty: "Known for late-night service and crowd favorites like Mixed Fruit Cream.",
        hours: "9:00 AM – 3:00 AM",
        status: "open",
        phone: "+91 93460 36222",
        whatsapp: "919346036222",
        mapLink: "https://maps.google.com/?q=17.3969894,78.422684",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.4!2d78.422684!3d17.3969894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzQ5LjIiTiA3OMKwMjUnMjEuNiJF!5e0!3m2!1sen!2sin!4v1",
        image: "/Nice Juice Centre – Tolichowki.webp",
        emoji: "🏬",
        highlight: false,
        imagePosition: "center 10%",
    },
    {
        id: 3,
        name: "Nice Juice Centre – Bandlaguda",
        tag: "Bandlaguda Branch",
        badge: "⭐ Popular",
        badgeColor: "#FF6B00",
        address: "19-4-14/2/23/A, Bandlaguda, Chandrayangutta, Hyderabad, Telangana 500005, India",
        specialty: "Signature Bandlaguda branch serving high demand with full menu and fresh daily specials.",
        hours: "9:00 AM – 12:00 AM",
        status: "open",
        phone: "+91 93985 88286",
        whatsapp: "919398588286",
        mapLink: "https://maps.google.com/?q=17.396068,78.425479",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.5!2d78.425479!3d17.396068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzQ1LjgiTiA3OMKwMjUnMzIuMSJF!5e0!3m2!1sen!2sin!4v1",
        image: "/Nice Juice Centre – Salarjung Colony.webp",
        emoji: "🏢",
        highlight: false,
    },
]
