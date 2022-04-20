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

    return (
        //Retornamos el contexto con los datos
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,emptyCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;