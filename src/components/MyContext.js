import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
    const value = "Hello from Context!";
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export function useMyContext() {
    return useContext(MyContext);
}
