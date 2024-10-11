'use server'

import Website from "@/models/website-model"

// Add a new website entry (server-side operation)
const addWebsite = async () => {
    const newWebsite = new Website({
        businessName: "Your Business Name",
        vision: "Our vision is to help people preserve and carry their most cherished memories...",
        targetMarkets: [
            "Individuals seeking personalized keepsakes",
            "Gift buyers looking for meaningful, unique presents",
            "Couples for wedding or anniversary keepsakes",
            "New parents for baby-related memorabilia",
            "Pet lovers to commemorate their furry friends",
            "Families and friends celebrating special occasions"
        ],
        categories: {
            Keychains: {
                description: "Custom resin keychains with personalized designs to keep your memories close wherever you go.",
                products: [
                    {
                        name: "Floral Memory Keychain",
                        description: "A delicate, handpicked flower preserved in resin, perfect for remembering a special day.",
                        price: "15.99",
                        image: "floral_keychain.jpg"
                    },
                    {
                        name: "Photo Keepsake Keychain",
                        description: "A custom keychain with your favorite photo encased in resin, a personal touch you can carry daily.",
                        price: "19.99",
                        image: "photo_keychain.jpg"
                    },
                    {
                        name: "Initials Resin Keychain",
                        description: "A stylish and minimal resin keychain with custom initials to make your keys stand out.",
                        price: "12.99",
                        image: "initials_keychain.jpg"
                    }
                ]
            },
            Keepsakes: {
                description: "Handmade resin keepsakes designed to preserve important moments, memories, or small mementos.",
                products: [
                    {
                        name: "Wedding Flower Keepsake",
                        description: "Encapsulate your wedding bouquet in a beautiful resin piece, forever preserving the memory of your special day.",
                        price: "79.99",
                        image: "wedding_keepsake.jpg"
                    },
                    {
                        name: "Baby First Curl Keepsake",
                        description: "A tiny curl from your baby's first haircut encased in resin, a precious reminder of early days.",
                        price: "59.99",
                        image: "baby_curl_keepsake.jpg"
                    },
                    {
                        name: "Pet Pawprint Keepsake",
                        description: "Capture your pet's pawprint in resin, a heartfelt way to keep your furry friend close.",
                        price: "49.99",
                        image: "pawprint_keepsake.jpg"
                    }
                ]
            },
            MemorialItems: {
                description: "Honor the memory of loved ones with personalized resin memorials.",
                products: [
                    {
                        name: "Ashes Memorial Pendant",
                        description: "A delicate pendant containing ashes of a loved one, sealed in resin to create a meaningful keepsake.",
                        price: "89.99",
                        image: "ashes_pendant.jpg"
                    },
                    {
                        name: "Memory Stone",
                        description: "A resin stone containing a special photo or message, perfect for honoring the life of a loved one.",
                        price: "39.99",
                        image: "memory_stone.jpg"
                    },
                    {
                        name: "Memory Jar",
                        description: "A jar of small memories such as flowers or notes encased in resin, preserving those moments forever.",
                        price: "69.99",
                        image: "memory_jar.jpg"
                    }
                ]
            }
        },
        aboutUs: {
            title: "About Us",
            content: "At [Your Business Name], we believe in capturing and preserving the moments that matter most..."
        },
        contact: {
            email: "info@yourbusiness.com",
            phone: "+1234567890",
            address: "123 Memory Lane, Keepsake City",
            socialMedia: {
                instagram: "https://instagram.com/yourbusiness",
                facebook: "https://facebook.com/yourbusiness"
            }
        },
        testimonials: [
            {
                name: "Sarah P.",
                content: "I absolutely love my resin keychain! It’s such a beautiful way to keep a memory close to my heart..."
            },
            {
                name: "Emily R.",
                content: "The custom keepsake I ordered for my wedding flowers is stunning..."
            },
            {
                name: "Jason T.",
                content: "I ordered a pawprint keepsake for my dog, and it’s honestly the most meaningful thing I own..."
            }
        ]
    });

    // Save the new website document
    console.log("LUH@")
    return newWebsite.save();
};

// Fetch the website data (server-side operation)
const getWebsite = async () => {
    // Use .lean() to convert the Mongoose document to plain JS objects
    return Website.find().lean();
};

export { addWebsite, getWebsite };
