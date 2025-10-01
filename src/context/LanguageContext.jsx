import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es"); // idioma
    
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };

    return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
    </LanguageContext.Provider>
    );
};

// Custom hook para consumirlo fácilmente
export const useLanguage = () => useContext(LanguageContext);
