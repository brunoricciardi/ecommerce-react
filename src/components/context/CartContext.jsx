import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (Item) => {
        setCartList([
            ...cartList,
            Item
        ])
}

    const removeCart =() =>{
        setCartList([])
}


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
            removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider