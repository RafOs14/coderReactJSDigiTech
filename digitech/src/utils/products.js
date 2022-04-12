const products = [
    {id: 1,
        category: "Monitor",
        categoryId: 1,
        name: "ALIENWARE MONITOR AW3420DW 34",
        description: "34 inch gaming monitor with the full colors brought by IPS Nano Color (98% DCI-P3) technology and a 2ms response time. Featuring a 1900R WQHD resolution and 21:9 display ratio.",
        brand: "Alienware",
        price: 1399,
        stock: 10,    
        quantity: 0,
        sales: 15,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXALM25.jpg"
            ]
        },
    {id: 2,
        category: "Teclado",
        categoryId: 1,
        name: "ASUS TECLADO RA05 TUF GAMING K3-RD-US",
        description: "ASUS TUF Gaming K3 RGB mechanical keyboard with N-key rollover, combination media keys, USB 2.0 passthrough, aluminum-alloy top cover, wrist rest, eight programmable macro keys and Aura Sync lighting",
        brand: "Asus",
        price: 157,
        stock: 30,    
        quantity: 0,
        sales: 10, 
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAST40.jpg"
            ]
    },
    {id: 3,
        category: "Mouse",
        categoryId: 1,
        name: "COUGAR MOUSE MINOS X2",
        description: "Minos X2 is the ideal mouse to make a strong entrance into competitive online gaming. Three-zone backlight, easy configuration and an extremely comfortable design make it perfect for those who want to experience gaming with a true gaming mouse.",
        brand: "Cougar",
        price: 35,
        stock: 60,    
        quantity: 0,
        sales: 5,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCGMX2.jpg"
            ]  
    },    
    {id: 4,
        category: "Joystick",
        categoryId: 2,
        name: "SONY JOYSTICK PS5 ORIGINAL BLANCO",
        description: "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design. Compared to DUALSHOCK 4 wireless controller. Available when feature is supported by game.",
        brand: "Sony",
        price: 122,
        stock: 15,    
        quantity: 0,
        sales: 50,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXSOJ21.jpg"
            ] 
    },
    {id: 5,
        category: "Mousepad",
        categoryId: 1,
        name: "COUGAR MOUSE PAD ARENA ORANGE XL",
        description: "COUGAR Arena`s unique design is the ideal battleground for your games. Its vast area will allow you to move freely, while its gaming surface guarantees you both smooth sliding and the right level of precision to avoid lagging behind in the fiercest online battles.",
        brand: "Cougar",
        price: 24,
        stock: 70,    
        quantity: 0,
        sales: 20,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCO800.jpg"
            ]  
    },
    {id: 6,
        category: "Fuente",
        categoryId: 1,
        name: "EVGA FUENTE 1600W GOLD 220-GP-1600-X1",
        description: "The SuperNOVA G+ is the new and improved fully-modular power supply line-up from EVGA with an 80+ Gold Efficiency rating. These power supplies pick up where the award-winning EVGA 1600 G2 and 1300 G2 power supplies left off and continue the tradition of EVGA quality and performance. Additionally, the SuperNOVA G+ power supplies feature a cleaner internal layout, a Variable Resistor module, two DC to DC modules for more efficient power switching, EVGA ECO Mode, a full suite of power supply protections, and EVGA’s World-Leading Global 10-Year Warranty on all G+ power supplies",
        brand: "EVGA",
        price: 672,
        stock: 6,    
        quantity: 0,
        sales: 35,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXEX116.jpg"
            ] 
    },
    {id: 7,
        category: "Procesador",
        categoryId: 1,
        name: "INTEL PROCESADOR I7-11700F LGA 1200",
        description: "The processor Intel Core i7-11700F is developed on the 14 nm technology node and architecture Comet Lake U. Its base clock speed is 1.80 GHz, and maximum clock speed in turbo boost - 3.70 GHz. Intel Core i7-11700F contains 4 processing cores. To make a right choice for computer upgrading, please get familiar with the detailed technical specifications and benchmark results. Check socket compatibility before choosing",
        brand: "Intel",
        price: 477,
        stock: 13,    
        quantity: 0,
        sales: 7,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFX11700F.jpg"
            ]  
    },    
    {id: 8,
        category: "Disco",
        categoryId: 1,
        name: "ADATA XPG DISCO SSD M.2 S20G 1TB",
        description: "The XPG SPECTRIX S20G's styling will take your PC build to the xtreme with its distinct x-shaped RGB lighting, while its performance will level-up your gaming with read/write speeds of 2500/1800MB per second.",
        brand: "Adata",
        price: 203,
        stock: 23,    
        quantity: 0,
        sales: 100,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXS201T.jpg"
            ]  
    },
    {id: 9,
        category: "Gabinete",
        categoryId: 1,
        name: "GABINETES SHARKOON REV220 ATX",
        description: "The minimalist front panel is presented in a carbon fiber look. Set in the middle of this is a silver-framed aluminium plate with a diamond cut. The REV220 thus appeals to users who will not only value the visibility of the installed hardware, but who also appreciate a high-quality case design. The subtle RGB background lighting around the central plate contributes to the atmospheric illumination and lends a colorful touch to the front of the case.",
        brand: "Sharkoon",
        price: 165,
        stock: 12,    
        quantity: 0,
        sales: 20,
         iva: 1.22,
         image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXSKV22.jpg"
            ]  
    },
    {id: 10,
        category: "Notebook",
        categoryId: 1,
        name: "ASUS NOTEBOOK GA401QM-211 ZG14",
        description: "The ROG Zephyrus G14 makes powerful, ultraportable Windows 10 Pro gaming accessible to everyone",
        brand: "Asus",
        price: 2659,
        stock: 5,    
        quantity: 0,
        sales: 12,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/ASNZG14.jpg"
            ]  
    },
    {id: 11,
        category: "Notebook",
        categoryId: 1,
        name: "HP NOTEBOOK 15-DY2054LA",
        description: "Unleash your creativity with the HP ENVY 15 inch Laptop that gives you the performance, features and freedom to create the way you want. Powered by an Intel® processor, brings your ideas to life in stunning colors that match your imagination. Your ideas stay your own with privacy features that keep your creations safe.",
        brand: "HP",
        price: 905,
        stock: 1,    
        quantity: 0,
        sales: 25,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXH54.jpg"
            ]  
    },
    {id: 12,
        category: "Notebook",
        categoryId: 1,
        name: "HP NOTEBOOK 15-DK1023LA 2B123LA#ABM",
        description: "Unleash your creativity with the HP ENVY 17 inch Laptop that gives you the performance, features and freedom to create the way you want. Powered by an Intel® processor, brings your ideas to life in stunning colors that match your imagination. Your ideas stay your own with privacy features that keep your creations safe.",
        brand: "HP",
        price: 1919,
        stock: 3,    
        quantity: 0,
        sales: 9,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXHPN87.jpg"
            ] 
    },
    {id: 13,
        category: "Fuente",
        categoryId: 1,
        name: "THERMALTAKE FUENTE 1050W PS-TPD-1050F3FAPU-1",
        description: "The built-in Riing Duo 14 RGB Fan features dual rings with 18 addressable LEDs, great light coverage, and uniform color and brightness to paint your build with 16.8 million colors. Show off the glamorous illumination through the unique ARGB Side Panel design and add the Wow factor to you build. Sync with Motherboard RGB Software",
        brand: "Thermaltake",
        price: 422,
        stock: 11,    
        quantity: 0,
        sales: 4,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXTTF101.jpg"
            ]  
    },
    {id: 14,
        category: "Procesador",
        categoryId: 1,
        name: "AMD PROCESADOR RYZEN 9 5900X",
        description: "Windows 10 - 64-Bit Edition, RHEL x86 64-Bit, Ubuntu x86 64-Bit, *Operating System (OS) support will vary by manufacturer.",
        brand: "AMD",
        price: 915,
        stock: 4,    
        quantity: 0,
        sales: 2,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAMP30.jpg"
            ] 
    },
    {id: 15,
        category: "Disco",
        categoryId: 1,
        name: "CRUCIAL DISCO M.2 1TB NVME P2",
        description: "There’s an easy cure for a slow computer: more memory. Designed to help your system run faster and smoother, Crucial® Desktop Memory is one of the easiest and most affordable ways to improve your system’s performance. Load programs faster. Increase responsiveness. Run data-intensive applications with ease, and increase your desktop’s multitasking capabilities.",
        brand: "Crucial",
        price: 170,
        stock: 55,    
        quantity: 0,
        sales: 6,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCRM21.jpg"
            ]  
    },
    {id: 16,
        category: "Gabinete",
        categoryId: 1,
        name: "SHARKOON GABINETE FLOW RGB ATX",
        description: "Let the colors flow: The RGB FLOW from Sharkoon presents itself as an elegant yet unobtrusive ATX midi tower with its tempered glass side panel and black chassis with clear lines. The minimalistic design is intersected by a stream of colors which flows through two integrated LED strips from the front panel to the side of the case, providing the built-in hardware with an atmospheric highlight. The RGB FLOW is not just an eye-catcher. With its mesh element on the front panel, locations for six fans or a radiator and numerous installation possibilities for data storage, it is also an ideal home for your hardware.",
        brand: "Sharkoon",
        price: 101,
        stock: 25,    
        quantity: 0,
        sales: 2,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXSKFL.jpg"
            ]  
    },
    {id: 17,
        category: "Auriculares",
        categoryId: 1,
        name: "COUGAR VINCHA PHONTUM S CGR-P53NB-510",
        description: "Phontum has been created for those who want to enjoy great audio in long gaming sessions. Its advanced audio technology will get you first-rate sound quality, while its two sets of earpads will maximize your comfort on every occasion.",
        brand: "Cougar",
        price: 70,
        stock: 18,    
        quantity: 0,
        sales: 29,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCOV19.jpg"
            ]  
    },
    {id: 18,
        category: "Auriculares",
        categoryId: 1,
        name: "COUGAR VINCHA IMMERSA PRO PRIX",
        description: "Immersa Pro Prix is a headset targeting at USB High Definition connection. The edition is born for PC games, targeting desktop or laptop gaming with high-end features such as 7.1 virtual surround, customizable lighting, a full software equalizer, strengthening sound drivers an upgraded 9.7mm microphone, it merges everything a PC gamer could ask for in a headset.",
        brand: "Cougar",
        price: 100,
        stock: 100,    
        quantity: 0,
        sales: 30,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXPPIX.jpg"
            ] 
    },
    {id: 19,
        category: "Teclado",
        categoryId: 1,
        name: "ASUS TECLADO ROG XA04 STRIX SCOPE DX-RD-US",
        description: "ROG Strix Scope RGB wired mechanical gaming keyboard with Cherry MX switches, aluminum frame, Aura Sync lighting and additional silver WASD for FPS games",
        brand: "Asus",
        price: 231,
        stock: 20,    
        quantity: 0,
        sales: 28,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAST77.jpg"
            ]  
    },
    {id: 20,
        category: "Mouse",
        categoryId: 1,
        name: "GIGABYTE MOUSE AORUS M3",
        description: "Real 6400 dpi Optical Engine 20-million-click Omron Switch RGB Fusion-16.8M Customizable Lighting On-the-fly DPI Adjustment Anti-slip Rubber Grips Teflon Mouse Feet",
        brand: "Gigabyte",
        price: 52,
        stock: 45,    
        quantity: 0,
        sales: 15,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXGB440.jpg"
            ]  
    },
    {id: 21,
        category: "Monitor",
        categoryId: 1,
        name: "ASUS MONITOR 27' VG27VQ",
        description: "TUF Gaming VG277Q1A Gaming Monitor 27 inch Full HD (1920 x 1080), 165Hz(above 144Hz), Extreme Low Motion Blur™, FreeSync™ Premium, 1ms (MPRT), Shadow Boost",
        brand: "Asus",
        price: 466,
        stock: 7,    
        quantity: 0,
        sales: 23,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXASM100.jpg"
            ]  
    },
    {id: 22,
        category: "Mouse",
        categoryId: 1,
        name: "COUGAR BUNGEE BUNKER RGB",
        description: "COUGAR BUNKER RGB unites the BUNKER series’ superior design with a highly attractive RGB lighting and a convenient two-port USB hub to become a highly useful addition to any gamer’s desk.",
        brand: "Cougar",
        price: 19,
        stock: 15,    
        quantity: 0,
        sales: 9,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXBUNK.jpg"
            ] 
    },
    {id: 23,
        category: "Auriculares",
        categoryId: 1,
        name: "JBL VINCHA QUANTUM ONE",
        description: "Get the professional edge with headtracking enhanced JBL QuantumSPHERE 360. Be at the center of the game with Hi-Res certified JBL QuantumSOUND Signature. Next-gen ergonomic design Active Noise Cancelling tuned for gaming, be heard with the voice focus detachable boom mic. DISCORD Certified game-chat balance dial",
        brand: "Jbl",
        price: 150,
        stock: 1,    
        quantity: 0,
        sales: 15,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXONE.jpg"
            ]  
    },
    {id: 24,
        category: "Memoria",
        categoryId: 1,
        name: "THERMALTAKE TOUGHRAM RGB DDR4 3600MHz 16GB 2x8GB RED",
        description: "Built with the highest quality of components to the highest of standards, the TOUGHRAM RGB has been coated with a dash of glossy red paint, delivering both an eye-catching look and outstanding gaming performance with stunning RGB lighting maximized for effortless sync with your RGB ecosystem.",
        brand: "Thermaltake",
        price: 176,
        stock: 3,    
        quantity: 0,
        sales: 3,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXTTM71.jpg"
            ] 
    },
    {id: 25,
        category: "VideoGames",
        categoryId: 2,
        name: "OCULUS RIFT SKU: 301-00200-03",
        description: "Oculus Rift CV1 301-00200-03 Virtual Reality Headset.",
        brand: "Microsoft",
        price: 899,
        stock: 3,    
        quantity: 0,
        sales: 1,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/FBX019689.jpg"
            ] 
    },
    {id: 26,
        category: "Joystick",
        categoryId: 2,
        name: "GRAVITY JOYSTICK PS4 GRA-027 BLACK DUALSHOCK 1",
        description: "No description.",
        brand: "GRAVITY",
        price: 28,
        stock: 4,    
        quantity: 0,
        sales: 1,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXGRJ100.jpg"
            ] 
    },
    {id: 27,
        category: "CellPhone",
        categoryId: 3,
        name: "Xiaomi Redmi Note 10 Pro (Global) Dual SIM 128 GB gray 6 GB RAM",
        description: "",
        brand: "Xiaomi",
        price: 437,
        stock: 7,    
        quantity: 0,
        sales: 1,
        iva: 1.22,
        image: [
            "https://th.bing.com/th/id/OIP.FASigoz5h3rv17wNABNTkgHaHa?pid=ImgDet&rs=1"
            ] 
    },
    {id: 28,
        category: "CellPhone",
        categoryId: 3,
        name: "Xiaomi Redmi Note 10S Dual SIM 128 GB 6 GB RAM",
        description: "",
        brand: "Xiaomi",
        price: 299,
        stock: 17,    
        quantity: 0,
        sales: 1,
        iva: 1.22,
        image: [
            "https://th.bing.com/th/id/OIP.yM71SyM40EdkyMPmN6XJ9wHaHa?pid=ImgDet&rs=1"
            ] 
    },
    {id: 29,
        category: "CellPhone",
        categoryId: 3,
        name: "Apple iPhone 11 (64 GB) - Black",
        description: "",
        brand: "Apple",
        price: 759,
        stock: 2,    
        quantity: 0,
        sales: 1,
        iva: 1.22,
        image: [
            "https://th.bing.com/th/id/R.16482521b9f3d38658b1474d9536da2f?rik=z1FHBtXRJvKVuA&pid=ImgRaw&r=0"
            ] 
    },
    {id: 30,
        category: "CellPhone",
        categoryId: 3,
        name: "Apple iPhone XR 64 GB - Black",
        description: "",
        brand: "Apple",
        price: 569,
        stock: 2,    
        quantity: 0,
        sales: 1,
        iva: 1.22,
        image: [
            "https://www.profex.ee/image/cache/data/Apple/xr_black-01-500x500.jpg"
            ] 
    }
];

module.exports = {
    products,
  }