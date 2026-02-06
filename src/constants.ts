import {
    BackpackIcon,
    BookIcon,
    CameraIcon,
    DesktopIcon,
    GamepadIcon,
    HeadphonesIcon,
    HomeIcon,
    LayersIcon,
    MixIcon,
    ShirtIcon,
    SmartphoneIcon,
    SparklesIcon,
    TagIcon,
} from '@/components/icons/HugeIcons';
import type { Category, Product } from '@/types';

export const categories: Category[] = [
    { id: 'all', name: 'All', count: 0, icon: LayersIcon },
    { id: 'bookmarks', name: 'Bookmarks', count: 0, icon: TagIcon },
    { id: 'new', name: 'New', count: 0, icon: SparklesIcon },
    { id: 'picks', name: 'Picks', count: 0, icon: TagIcon },
    { id: 'tech', name: 'Tech', count: 116, icon: SmartphoneIcon },
    { id: 'workspace', name: 'Workspace', count: 135, icon: DesktopIcon },
    { id: 'home', name: 'Home', count: 60, icon: HomeIcon },
    { id: 'carry', name: 'Carry', count: 85, icon: BackpackIcon },
    { id: 'books', name: 'Books', count: 31, icon: BookIcon },
    { id: 'lifestyle', name: 'Lifestyle', count: 21, icon: MixIcon },
    { id: 'audio', name: 'Audio', count: 0, icon: HeadphonesIcon },
    { id: 'gaming', name: 'Gaming', count: 0, icon: GamepadIcon },
    { id: 'photography', name: 'Photography', count: 0, icon: CameraIcon },
    { id: 'fashion', name: 'Fashion', count: 0, icon: ShirtIcon },
];

export const products: Product[] = [
    {
        id: 1,
        brand: 'Apple',
        category: 'Tech',
        name: 'Studio Display',
        imageUrl: '/studio display.webp',
        price: 1599,
        description:
            '27-inch 5K Retina display with 600 nits brightness and P3 color. Perfect for creative professionals seeking exceptional color accuracy and clarity.',
    },
    {
        id: 2,
        brand: 'Grams28',
        category: 'Carry',
        name: '151 Stealth Backpack',
        imageUrl: '/Grams28_151 Stealth Backpack.webp',
        price: 299,
        description:
            'Minimalist backpack with premium materials and smart organization. Features multiple compartments, laptop sleeves, and ergonomic design for comfortable daily carry.',
    },
    {
        id: 3,
        brand: 'Herman Miller',
        category: 'Workspace',
        name: 'Aeron',
        imageUrl: '/aeron.webp',
        price: 1395,
        description:
            'Iconic ergonomic chair with PostureFit SL technology and breathable mesh. Adjustable for all body types with 12-year warranty. The gold standard in office seating.',
    },
    {
        id: 4,
        brand: 'WorkLouder',
        category: 'Tech',
        name: 'Mechanical Keyboard',
        imageUrl: '/workLouder.webp',
        price: 299,
        isStaffPick: true,
        description:
            'Premium mechanical keyboard with tactile switches and customizable RGB. Compact design maximizes desk space while delivering exceptional typing comfort.',
    },
    {
        id: 5,
        brand: 'Porsche',
        category: 'Lifestyle',
        name: '911 Turbo S',
        imageUrl: '/911.webp',
        price: 207000,
        isStaffPick: true,
        description:
            '640+ horsepower twin-turbo flat-six engine. Accelerates 0-60 in under 2.7 seconds. Iconic design meets cutting-edge performance for the ultimate driving experience.',
    },
    {
        id: 6,
        brand: 'Omega',
        category: 'Lifestyle',
        name: 'Speedmaster',
        imageUrl: '/Omega_Speedmaster.webp',
        price: 6400,
        isStaffPick: true,
        description:
            'The legendary "Moonwatch" - first watch on the moon. Iconic manual-winding chronograph with timeless design. A true icon of Swiss watchmaking excellence.',
    },
    {
        id: 7,
        brand: 'Apple',
        category: 'Tech',
        name: 'iPhone Air',
        imageUrl: '/Apple_iPhone Air.webp',
        price: 599,
        description:
            'Ultra-lightweight iPhone with powerful A-series chip and Liquid Retina display. Advanced camera system and 5G connectivity in a premium aluminum design.',
    },
    {
        id: 8,
        brand: 'Apple',
        category: 'Tech',
        name: 'iPhone 17 Pro',
        imageUrl: '/Apple_iPhone Pro 17.webp',
        price: 1199,
        description:
            'Flagship iPhone with ProMotion 120Hz display and advanced triple-camera system. Desktop-class performance for creators and professionals.',
    },
    {
        id: 9,
        brand: 'Bang',
        category: 'Home',
        name: 'Small Square in Orange Acrylic CE',
        imageUrl: '/Bang_Small_Square_Orange_Acrylic_CE.webp',
        price: 85,
        description:
            'Vibrant orange acrylic square with clean geometric design. Adds modern aesthetic to any space as functional decor or artistic statement.',
    },
    {
        id: 10,
        brand: 'Bionic',
        category: 'Home',
        name: 'Valet Tray',
        imageUrl: '/Bionic_Valet Tray.webp',
        price: 125,
        description:
            'Elegant valet tray with multiple compartments for watches, jewelry, keys, and phones. Beautiful design that keeps essentials organized.',
    },
    {
        id: 11,
        brand: 'Blanked',
        category: 'Workspace',
        name: 'Desktop Folder',
        imageUrl: '/Blanked_Desktop Folder.webp',
        price: 95,
        description:
            'Minimalist desktop organizer with multiple compartments for papers and documents. Clean design that transforms chaotic desks into organized workspaces.',
    },
    {
        id: 12,
        brand: 'Blanked',
        category: 'Workspace',
        name: 'Industrial Bookstand',
        imageUrl: '/Blanked_Industrial Bookstand.webp',
        price: 145,
        description:
            'Industrial-style bookstand with adjustable design. Showcases books beautifully while providing comfortable reading angles. Premium metal construction.',
    },
    {
        id: 13,
        brand: 'Breda',
        category: 'Lifestyle',
        name: 'Pulse (Tandem)',
        imageUrl: '/Breda_Pulse (Tandem).webp',
        price: 129,
        description:
            'Minimalist watch with clean dial design and Japanese quartz movement. Versatile style that transitions from casual to professional settings.',
    },
    {
        id: 14,
        brand: 'Crust',
        category: 'Home',
        name: 'P–1 Pepper Mill',
        imageUrl: '/Crust_P–1 Pepper Mill.webp',
        price: 155,
        description:
            'Premium pepper mill with adjustable grind settings and elegant design. Solid wood and metal construction for perfect seasoning control.',
    },
    {
        id: 15,
        brand: 'Dyson',
        category: 'Home',
        name: 'Solarcycle Morph',
        imageUrl: '/Dyson_Solarcycle Morph Floor.webp',
        price: 649,
        description:
            'Smart lamp that adapts color temperature and brightness throughout the day. Supports circadian rhythm with precision lighting and sleek design.',
    },
    {
        id: 16,
        brand: 'Fellow',
        category: 'Home',
        name: 'Stagg EKG',
        imageUrl: '/fellow_stagg.webp',
        price: 189,
        description:
            'Precision electric kettle with PID temperature control and gooseneck spout. Perfect pour-over control from 104°F to 212°F with elegant design.',
    },
    {
        id: 17,
        brand: 'Ferrari',
        category: 'Lifestyle',
        name: 'Roma',
        imageUrl: '/Ferrari_Roma.webp',
        price: 247000,
        isStaffPick: true,
        description:
            'Elegant Italian grand tourer with 600+ horsepower twin-turbo V8. Sophisticated design meets exhilarating performance for the ultimate driving experience.',
    },
    {
        id: 18,
        brand: 'Grau',
        category: 'Home',
        name: 'Salt',
        imageUrl: '/Grau_Salt.webp',
        price: 75,
        description:
            'Minimalist salt shaker with elegant design and smooth dispensing. Premium materials that elevate any dining table setting.',
    },
    {
        id: 19,
        brand: 'HS82',
        category: 'Home',
        name: 'ClockClock 24',
        imageUrl: '/HS82_ClockClock 24.webp',
        price: 4495,
        description:
            'Kinetic art clock featuring 24 synchronized analog clocks. Clock hands form numbers creating a mesmerizing visual timepiece and conversation piece.',
    },
    {
        id: 20,
        brand: 'Kismas',
        category: 'Home',
        name: 'Doric Lamp 01',
        imageUrl: '/Kismas_Doric Lamp 01.webp',
        price: 495,
        description:
            'Floor lamp inspired by Doric columns with fluted design. Adjustable head provides directional lighting with sculptural elegance.',
    },
    {
        id: 21,
        brand: 'Lego',
        category: 'Lifestyle',
        name: 'Icons 10295 Porsche 911',
        imageUrl: '/Lego _ Icons 10295 Porsche 911.webp',
        price: 169,
        description:
            '1,400+ piece Lego set recreating the iconic Porsche 911. Build as Turbo or Targa variant with authentic details and opening features.',
    },
    {
        id: 22,
        brand: 'Leica',
        category: 'Tech',
        name: 'Q3',
        imageUrl: '/Leica Q3.webp',
        price: 5995,
        isStaffPick: true,
        description:
            '60MP full-frame compact camera with legendary Summilux 28mm lens. Professional image quality in a portable, beautifully crafted German design.',
    },
    {
        id: 23,
        brand: 'Ligne Roset',
        category: 'Home',
        name: 'Togo Loveseat',
        imageUrl: '/ligneroset_TogoLoveseat.webp',
        price: 5495,
        description:
            'Iconic 1970s French design with unique foam construction. Low-profile loveseat offering sculptural beauty and exceptional comfort.',
    },
    {
        id: 24,
        brand: 'Lofree',
        category: 'Workspace',
        name: 'Flow 2',
        imageUrl: '/Lofree_ Flow 2.webp',
        price: 149,
        description:
            'Low-profile ergonomic mouse reducing wrist strain. Precision tracking with wired and wireless options. Minimalist design for modern workspaces.',
    },
    {
        id: 25,
        brand: 'Herman Miller',
        category: 'Home',
        name: 'Noguchi Table',
        imageUrl: '/noguchi_table.webp',
        price: 3795,
        description:
            'Iconic 1947 design by Isamu Noguchi. Glass top on sculptural interlocking wood base blurring the line between furniture and art.',
    },
    {
        id: 26,
        brand: 'Nomad',
        category: 'Tech',
        name: 'Base One Max 3-in-1',
        imageUrl: '/Nomad_ Base One Max 3-in-1.webp',
        price: 249,
        description:
            '3-in-1 charging station for iPhone, Apple Watch, and AirPods. MagSafe fast charging with elegant design and organized cable management.',
    },
    {
        id: 27,
        brand: 'Nothing',
        category: 'Tech',
        name: 'Ear (stick)',
        imageUrl: '/Nothing_Headphones(1).webp',
        price: 99,
        description:
            'Transparent earbuds with innovative fit design. Custom 12.6mm drivers deliver rich sound with advanced noise cancellation. Unique cylindrical charging case.',
    },
    {
        id: 28,
        brand: 'Nothing',
        category: 'Tech',
        name: 'Nothing Phone (3)',
        imageUrl: '/Nothing_Phone(3).webp',
        price: 699,
        description:
            'Transparent smartphone with unique Glyph Interface LED notifications. Flagship performance with dual cameras and clean Nothing OS experience.',
    },
    {
        id: 29,
        brand: 'Phaidon',
        category: 'Books',
        name: 'Dieter Rams: The Complete Works',
        imageUrl: '/Phaidon_Dieter Rams_ The Complete Works.webp',
        price: 75,
        description:
            'Comprehensive volume documenting Dieter Rams\' legendary Braun career. Features hundreds of photos, sketches, and insights into his "less but better" philosophy.',
    },
    {
        id: 30,
        brand: 'Phaidon',
        category: 'Books',
        name: 'The Design Book',
        imageUrl: '/Phaidon_The Design Book.webp',
        price: 65,
        description:
            'Curated collection of 500 iconic design objects from the past 150 years. Essential reference for understanding great design across all categories.',
    },
    {
        id: 31,
        brand: 'Rimowa',
        category: 'Carry',
        name: 'Classic Cabin',
        imageUrl: '/Rimowa_Classic Cabin.webp',
        price: 1650,
        isStaffPick: true,
        description:
            'Iconic aluminum cabin suitcase with grooved design. Precision German engineering meets sophisticated style with smooth multi-wheel system.',
    },
    {
        id: 32,
        brand: 'Rolex',
        category: 'Lifestyle',
        name: 'Datejust',
        imageUrl: '/Rolex_Datejust.webp',
        price: 8950,
        isStaffPick: true,
        description:
            'Iconic 1945 watch - first with automatic date. Classic Oyster case with fluted bezel and chronometer-certified movement. Timeless elegance.',
    },
    {
        id: 33,
        brand: 'Serica',
        category: 'Lifestyle',
        name: 'Réf. 1174-1 Parade',
        imageUrl: '/Serica_Réf1174-1 Parade.webp',
        price: 899,
        description:
            'Vintage-inspired French watch with Swiss automatic movement. Clean dial design with luminescent markers. Versatile style for everyday wear.',
    },
    {
        id: 34,
        brand: 'Sigma',
        category: 'Tech',
        name: 'BF',
        imageUrl: '/Sigma_BF.webp',
        price: 199,
        description:
            'Magnetic wireless charging base with minimalist design. Intelligent power delivery and subtle LED indicator. Keeps workspace clean and organized.',
    },
    {
        id: 35,
        brand: 'Sony',
        category: 'Tech',
        name: 'WH-1000XM5',
        imageUrl: '/Sony_WH 1000XM5.webp',
        price: 399,
        description:
            'Industry-leading noise cancellation with V1 processor. Custom 30mm drivers deliver rich sound. 30-hour battery life with exceptional comfort.',
    },
    {
        id: 36,
        brand: 'Subminimal',
        category: 'Home',
        name: 'Subscale',
        imageUrl: '/Subminimal_Subscale.webp',
        price: 175,
        description:
            'Minimalist kitchen scale with sleek design. Precise measurements up to 3kg with 0.1g accuracy. Beautiful design object for any countertop.',
    },
    {
        id: 37,
        brand: 'Taschen',
        category: 'Books',
        name: 'Virgil Abloh. Nike. ICONS',
        imageUrl: '/Taschen_Virgil Abloh. Nike. ICONS.webp',
        price: 150,
        description:
            "Comprehensive volume documenting Virgil Abloh's revolutionary Nike collaborations. Features stunning photography, design sketches, and insights into sneaker culture.",
    },
    {
        id: 38,
        brand: 'Xbloom',
        category: 'Home',
        name: 'Studio',
        imageUrl: '/xbloomstudio.webp',
        price: 1299,
        description:
            'Precision coffee brewing system with temperature control and programmable recipes. Supports pour-over, immersion, and hybrid methods for café-quality results.',
    },
    {
        id: 39,
        brand: 'Apple',
        category: 'Tech',
        name: 'Pro Display XDR',
        imageUrl: '/apple-pro-display-xdr.png',
        price: 4999,
        description:
            '32-inch 6K Retina display with Extreme Dynamic Range. 1,000 nits sustained brightness, 576-zone local dimming. Reference-grade monitor for professionals.',
    },
    {
        id: 40,
        brand: 'Elago',
        category: 'Home',
        name: 'NASA Titanium Mug 450ML',
        imageUrl: '/Elago_NASA Titanium Mug 450ML.webp',
        price: 49,
        description:
            'Space-inspired titanium mug with NASA branding. Lightweight and durable with excellent heat retention. Perfect for coffee enthusiasts and space enthusiasts alike.',
    },
    {
        id: 41,
        brand: 'Ember',
        category: 'Home',
        name: 'Cup',
        imageUrl: '/Ember_Cup.webp',
        price: 199,
        description:
            'Temperature-controlled smart mug that keeps your drink at your preferred temperature. Connects to app for precise control. Perfect for coffee, tea, or hot chocolate.',
    },
    {
        id: 42,
        brand: 'Fractal',
        category: 'Tech',
        name: 'Terra',
        imageUrl: '/Fractal_Terra.webp',
        price: 229,
        description:
            'Compact mini-ITX PC case with premium materials and intelligent airflow design. Showcases components beautifully while maintaining excellent thermal performance.',
    },
    {
        id: 43,
        brand: 'HMM',
        category: 'Home',
        name: 'Mugr',
        imageUrl: '/HMM_Mugr.webp',
        price: 65,
        description:
            'Modern minimalist mug with ergonomic handle design. Premium ceramic construction with sleek aesthetic. Perfect for daily coffee rituals.',
    },
    {
        id: 44,
        brand: 'Hardgraft',
        category: 'Carry',
        name: 'Long Haul Briefcase',
        imageUrl: '/Hardgraft_Long Haul Briefcase.webp',
        price: 895,
        description:
            'Premium leather briefcase with intelligent organization. Handcrafted with finest materials and attention to detail. Designed for professionals who appreciate quality.',
    },
    {
        id: 45,
        brand: 'Larq',
        category: 'Home',
        name: 'Bottle PureVis 2',
        imageUrl: '/Larq_Bottle PureVis 2.webp',
        price: 99,
        description:
            'Self-cleaning water bottle with PureVis UV-C technology. Eliminates up to 99.9999% of bacteria and viruses. Keeps water fresh and clean throughout the day.',
    },
    {
        id: 46,
        brand: 'Lofree',
        category: 'Workspace',
        name: 'Flow Lite84',
        imageUrl: '/Lofree_ Flow Lite84.webp',
        price: 199,
        description:
            'Compact 84-key mechanical keyboard with tactile switches. Low-profile design maximizes desk space while delivering exceptional typing experience.',
    },
    {
        id: 47,
        brand: 'New Balance',
        category: 'Lifestyle',
        name: '990v5',
        imageUrl: '/New Balance_990v5.webp',
        price: 185,
        description:
            'Iconic running shoe with premium materials and superior comfort. ENCAP midsole technology provides cushioning and support. Made in USA craftsmanship.',
    },
    {
        id: 48,
        brand: 'Apple',
        category: 'Tech',
        name: 'AirPods Max',
        imageUrl: '/airpods max.webp',
        price: 549,
        description:
            'Premium over-ear headphones with Active Noise Cancellation and spatial audio. Custom acoustic design with exceptional sound quality and comfort.',
    },
    {
        id: 49,
        brand: 'Blanked',
        category: 'Workspace',
        name: 'Monitor Stand',
        imageUrl: '/blanked_monitorstand.webp',
        price: 125,
        description:
            'Minimalist monitor stand that elevates your display for ergonomic viewing. Premium materials with cable management. Transforms any workspace.',
    },
    {
        id: 50,
        brand: 'IKEA',
        category: 'Home',
        name: 'Varmblixt',
        imageUrl: '/ikea_varmblixt.webp',
        price: 29,
        description:
            'Scandinavian-inspired floor lamp with modern design. Adjustable height and directional light. Affordable quality for contemporary homes.',
    },
    {
        id: 51,
        brand: 'Karlsson',
        category: 'Home',
        name: 'Flip Clock',
        imageUrl: '/karlsson_flipclock.webp',
        price: 199,
        description:
            'Retro-inspired flip clock with mechanical number display. Quartz movement with silent operation. Classic design that adds character to any room.',
    },
    {
        id: 52,
        brand: 'LoveFrom',
        category: 'Home',
        name: 'Sailing Lamp',
        imageUrl: '/lovefrom_sailinglamp.webp',
        price: 1295,
        description:
            'Elegant floor lamp inspired by sailing aesthetics. Beautiful form meets functional lighting. Premium materials and thoughtful design detail.',
    },
    {
        id: 53,
        brand: 'Steam',
        category: 'Tech',
        name: 'Steam Deck',
        imageUrl: '/steam_steamdeck.webp',
        price: 399,
        description:
            'Handheld gaming PC with powerful AMD processor and custom SteamOS. Play your entire Steam library on the go. High-resolution touchscreen and ergonomic controls.',
    },
];
