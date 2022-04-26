import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCart] = useState([]);

    const addToCart = (product, cant) => {
        let exist = cartItems.find(item => item.itemId === product.id);
        //Si no existe el producto en el carrito lo agregamos
        if (exist === undefined) {
            setCart([
                ...cartItems,
                {
                    itemId: product.id,
                    itemImg: product.image,
                    itemName: product.name,
                    itemPrice: product.price,
                    itemCant: cant,
                }
            ]);
        } else {
            //Si ya existe el producto en el carrito, sumamos la cantidad
            exist.itemCant++;
        }
    };

    //Eliminamos un producto del carrito
    const removeFromCart = (id) => {
        let erase = cartItems.filter(item => item.itemId !== id);
        setCart(erase);
    };

    //Vacia el carrito
    const emptyCart = () => {
        setCart([]);
    };

    //Calculo de subtotal por item
    const totalxItem = (itemId) => {
        let i = cartItems.map(item => item.itemId).indexOf(itemId);
        return cartItems[i].itemCant * cartItems[i].itemPrice;
    };

    //Calculo de subtotal
    const subTotal = () => {
        let subtotal = cartItems.map(item => totalxItem(item.itemId));
        return subtotal.reduce((a, b) => a + b, 0);
    };

    //Calculo de impuestos
    const taxes = () => {
        return subTotal() * 0.22;       
    };

    //Calculo de total
    const total = () => {
        return subTotal() + taxes();
    };

    //Calcular la cantidad de items en el carrito
    const itemsCant = () => {
        let cant = cartItems.map(item => item.itemCant);
        return cant.reduce((a, b) => a + b, 0);
    };

    return (
        //Retornamos el contexto con los datos
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,emptyCart,itemsCant, totalxItem, subTotal, taxes, total}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;