import { useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={"pablito"}>
        {children}
        </AppContext.Provider>
    )
}

const useMyContext = () => useContext(AppContext);

export { AppProvider, useMyContext }; 