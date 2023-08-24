'use client'
import React, { createContext, useContext, useState } from "react";
interface DataContextType {
    menuState: boolean,
}

const MenuContext = createContext<DataContextType | any>(null);
export const useMenuContext = () => useContext(MenuContext)
export const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [menuState, setMenuState] = useState<boolean>(false)

    return (
        <MenuContext.Provider
            value={{
                setMenuState,
                menuState
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}