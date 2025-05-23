import React, { createContext, useState } from "react";

export const Contextapi = createContext();

export const MyProvider = ({ children }) => {
    const [estado, setEstado] = useState("Olá, mundo!");

    
    return (
        <Contextapi.Provider value={{ estado, setEstado }}>
            {children}
        </Contextapi.Provider>
    );
};