import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCart] = useState([]);

    const addToCart = (product, cant) => {
        let exist = cartItems.find(item => item.itemId === product.id);
        //If the item didn't exist, we add the item to the cart
        if (exist === undefined) {
            setCart([
                ...cartItems,
                {
                    itemId: product.id,
                    itemImg: product.image,
                    itemName: product.name,
                    itemPrice: product.price.toFixed(2),
                    itemCant: cant,
                }
            ]);
        } else {
            //If the item exist, we add the quantity
            exist.itemCant += cant;
            setCart([...cartItems]);
        }
    };

    //Delete an item from the cart
    const removeFromCart = (id) => {
        let erase = cartItems.filter(item => item.itemId !== id);
        setCart(erase);
    };

    //Empty the cart
    const emptyCart = () => {
        setCart([]);
    };

    //Calculate the total of the cart for an item
    const totalxItem = (itemId) => {
        let i = cartItems.map(item => item.itemId).indexOf(itemId);
        return cartItems[i].itemCant * cartItems[i].itemPrice;
    };

    //Calculate the subtotal of the cart
    const subTotal = () => {
        let subtotal = cartItems.map(item => totalxItem(item.itemId));
        return subtotal.reduce((a, b) => a + b, 0);
    };

    //Calculate the taxes of the cart
    const taxes = () => {
        return (subTotal() * 0.22);       
    };

    //Calculate the total of the cart
    const total = () => {
        return subTotal() + taxes();
    };

    //Sum the quantity of an item
    const itemsCant = () => {
        let cant = cartItems.map(item => item.itemCant);
        return cant.reduce((a, b) => a + b, 0);
    };

    return (
        //Return the context
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,emptyCart,itemsCant, totalxItem, subTotal, taxes, total}}>
            { children }
        </CartContext.Provider>
    )
}

//Export the provider
export default CartContextProvider;