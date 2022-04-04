const products = [
        {id: 1,
            category: "Monitor",
            description: "ALIENWARE MONITOR AW3420DW 34",
            brand: "Alienware",
            price: 3199,
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
            description: "ASUS TECLADO RA05 TUF GAMING K3-RD-US",
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
            description: "COUGAR MOUSE MINOS X2",
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
            description: "SONY JOYSTICK PS5 ORIGINAL BLANCO",
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
            description: "COUGAR MOUSE PAD ARENA ORANGE XL",
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
            description: "EVGA FUENTE 1600W GOLD 220-GP-1600-X1",
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
            description: "INTEL PROCESADOR I7-11700F LGA 1200",
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
            description: "ADATA XPG DISCO SSD M.2 S20G 1TB",
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
            description: "GABINETES SHARKOON REV220 ATX",
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
            description: "ASUS NOTEBOOK GA401QM-211 ZG14",
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
            description: "HP NOTEBOOK 15-DY2054LA",
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
            description: "HP NOTEBOOK 15-DK1023LA 2B123LA#ABM",
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
            description: "THERMALTAKE FUENTE 1050W PS-TPD-1050F3FAPU-1",
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
            description: "AMD PROCESADOR RYZEN 9 5900X",
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
            description: "CRUCIAL DISCO M.2 1TB NVME P2",
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
            description: "SHARKOON GABINETE FLOW RGB ATX",
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
            description: "COUGAR VINCHA PHONTUM S CGR-P53NB-510",
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
            description: "COUGAR VINCHA IMMERSA PRO PRIX",
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
            description: "ASUS TECLADO ROG XA04 STRIX SCOPE DX-RD-US",
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
            description: "GIGABYTE MOUSE AORUS M3",
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
            description: "ASUS MONITOR 27' VG27VQ",
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
            description: "COUGAR BUNGEE BUNKER RGB",
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
            description: "JBL VINCHA QUANTUM ONE",
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
            description: "THERMALTAKE TOUGHRAM RGB DDR4 3600MHz 16GB 2x8GB RED",
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