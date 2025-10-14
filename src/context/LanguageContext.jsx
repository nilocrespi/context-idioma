import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado inicial: leer desde localStorage o usar "es" por defecto
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem("language");
    return storedLang ? storedLang : "es";
  });

  // Función para alternar idioma
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Efecto: guardar idioma en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = () => useContext(LanguageContext);
