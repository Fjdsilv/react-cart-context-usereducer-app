import { useContext, createContext, useState, useReducer } from "react";
import { data } from "../data";

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            const myNewItem = data.find(item => item.id === action.payload)
            if(state.find(item => item.id === myNewItem.id)) {
                return state
            }
            else  {
                return [...state, myNewItem]
            }
        
        case "REMOVE_ITEM":
            const items = state.filter(item => item.id !== action.payload)
            return [...items]

        default:
        
            return state;
    }
}

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [shopItems, setShopItems] = useState(data);

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{
            state,
            shopItems,
            dispatch,
        }}>
        {children}
        </AppContext.Provider>
    )
}

const useMyContext = () => useContext(AppContext);

export { AppProvider, useMyContext }; 