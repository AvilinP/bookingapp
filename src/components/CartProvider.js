import React, {useReducer, useContext, createContext} from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state, action.item]

        case "REMOVE":
            const newArray = [...state];
            newArray.splice(action.index, 1)
            return newArray;

        case "CLEARCART":
            return[];        
        default:
            throw new Error(`unknow action ${action.type}`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])

    console.table("useContext", state)

    return (
        <CartDispatchContext.Provider value = {dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)