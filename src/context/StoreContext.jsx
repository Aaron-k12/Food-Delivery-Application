import { useState, useEffect, createContext } from 'react'
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

function StoreContextProvider({ children }) {

    const [cartItems, setCartItems] = useState({})

    // function to add item to cart
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({
                ...prev, 
                [itemId]: 1
            }))
        }
        else {
            setCartItems((prev) => ({
                ...prev, 
                [itemId] : prev[itemId] + 1
            }))
        }
    }

    // function to remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, 
            [itemId] : prev[itemId] - 1
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount= 0;

        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
            
        }
        return totalAmount
    }

    const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount

    }
    
    return (  
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
      )
    

}

export default StoreContextProvider