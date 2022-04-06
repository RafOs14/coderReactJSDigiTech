const products = [
    {id: 1,
        category: "Monitor",
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
        name: "ASUS TECLADO RA05 TUF GAMING K3-RD-US",
        description: "",
        brand: "Asus",
        price: 157,
        stock: 10,    
        quantity: 0,
        sales: 10, 
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAST40.jpg"
            ]
    },
    {id: 3,
        category: "Mouse",
        name: "COUGAR MOUSE MINOS X2",
        description: "",
        brand: "Cougar",
        price: 35,
        stock: 10,    
        quantity: 0,
        sales: 5,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCGMX2.jpg"
            ]  
    },    
    {id: 4,
        category: "Joystick",
        name: "SONY JOYSTICK PS5 ORIGINAL BLANCO",
        description: "",
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
        name: "COUGAR MOUSE PAD ARENA ORANGE XL",
        description: "",
        brand: "Cougar",
        price: 24,
        stock: 7,    
        quantity: 0,
        sales: 20,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCO800.jpg"
            ]  
    },
    {id: 6,
        category: "Fuente",
        name: "EVGA FUENTE 1600W GOLD 220-GP-1600-X1",
        description: "",
        brand: "EVGA",
        price: 672,
        stock: 10,    
        quantity: 0,
        sales: 35,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXEX116.jpg"
            ] 
    },
    {id: 7,
        category: "Procesador",
        name: "INTEL PROCESADOR I7-11700F LGA 1200",
        description: "",
        brand: "Intel",
        price: 477,
        stock: 10,    
        quantity: 0,
        sales: 7,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFX11700F.jpg"
            ]  
    },    
    {id: 8,
        category: "Disco",
        name: "ADATA XPG DISCO SSD M.2 S20G 1TB",
        description: "",
        brand: "Adata",
        price: 203,
        stock: 10,    
        quantity: 0,
        sales: 100,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXS201T.jpg"
            ]  
    },
    {id: 9,
        category: "Gabinete",
        name: "GABINETES SHARKOON REV220 ATX",
        description: "",
        brand: "Sharkoon",
        price: 165,
        stock: 10,    
        quantity: 0,
        sales: 20,
         iva: 1.22,
         image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXSKV22.jpg"
            ]  
    },
    {id: 10,
        category: "Notebook",
        name: "ASUS NOTEBOOK GA401QM-211 ZG14",
        description: "",
        brand: "Asus",
        price: 2659,
        stock: 10,    
        quantity: 0,
        sales: 12,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/ASNZG14.jpg"
            ]  
    },
    {id: 11,
        category: "Notebook",
        name: "HP NOTEBOOK 15-DY2054LA",
        description: "",
        brand: "HP",
        price: 905,
        stock: 10,    
        quantity: 0,
        sales: 25,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXH54.jpg"
            ]  
    },
    {id: 12,
        category: "Notebook",
        name: "HP NOTEBOOK 15-DK1023LA 2B123LA#ABM",
        description: "",
        brand: "HP",
        price: 1919,
        stock: 10,    
        quantity: 0,
        sales: 9,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXHPN87.jpg"
            ] 
    },
    {id: 13,
        category: "Fuente",
        name: "THERMALTAKE FUENTE 1050W PS-TPD-1050F3FAPU-1",
        description: "",
        brand: "Thermaltake",
        price: 422,
        stock: 10,    
        quantity: 0,
        sales: 4,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXTTF101.jpg"
            ]  
    },
    {id: 14,
        category: "Procesador",
        name: "AMD PROCESADOR RYZEN 9 5900X",
        description: "",
        brand: "AMD",
        price: 915,
        stock: 10,    
        quantity: 0,
        sales: 2,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAMP30.jpg"
            ] 
    },
    {id: 15,
        category: "Disco",
        name: "CRUCIAL DISCO M.2 1TB NVME P2",
        description: "",
        brand: "Crucial",
        price: 170,
        stock: 10,    
        quantity: 0,
        sales: 6,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCRM21.jpg"
            ]  
    },
    {id: 16,
        category: "Gabinete",
        name: "SHARKOON GABINETE FLOW RGB ATX",
        description: "",
        brand: "Sharkoon",
        price: 101,
        stock: 10,    
        quantity: 0,
        sales: 2,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXSKFL.jpg"
            ]  
    },
    {id: 17,
        category: "Auriculares",
        name: "COUGAR VINCHA PHONTUM S CGR-P53NB-510",
        description: "",
        brand: "Cougar",
        price: 70,
        stock: 10,    
        quantity: 0,
        sales: 29,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXCOV19.jpg"
            ]  
    },
    {id: 18,
        category: "Auriculares",
        name: "COUGAR VINCHA IMMERSA PRO PRIX",
        description: "",
        brand: "Cougar",
        price: 100,
        stock: 10,    
        quantity: 0,
        sales: 30,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXPPIX.jpg"
            ] 
    },
    {id: 19,
        category: "Teclado",
        name: "ASUS TECLADO ROG XA04 STRIX SCOPE DX-RD-US",
        description: "",
        brand: "Asus",
        price: 231,
        stock: 7,    
        quantity: 0,
        sales: 28,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAST77.jpg"
            ]  
    },
    {id: 20,
        category: "Mouse",
        name: "GIGABYTE MOUSE AORUS M3",
        description: "",
        brand: "Gigabyte",
        price: 52,
        stock: 7,    
        quantity: 0,
        sales: 15,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXGB440.jpg"
            ]  
    },
    {id: 21,
        category: "Monitor",
        name: "ASUS MONITOR 27' VG27VQ",
        description: "",
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
        name: "COUGAR BUNGEE BUNKER RGB",
        description: "",
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
        name: "JBL VINCHA QUANTUM ONE",
        description: "",
        brand: "Jbl",
        price: 150,
        stock: 10,    
        quantity: 0,
        sales: 15,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXONE.jpg"
            ]  
    },
    {id: 24,
        category: "Memoria",
        name: "THERMALTAKE TOUGHRAM RGB DDR4 3600MHz 16GB 2x8GB RED",
        description: "",
        brand: "Thermaltake",
        price: 176,
        stock: 3,    
        quantity: 0,
        sales: 3,
        iva: 1.22,
        image: [
            "https://www.banifox.com/imagenes/img_contenido/productos/a/BFXTTM71.jpg"
            ] 
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(products);
        }, 3000);
    })
}
