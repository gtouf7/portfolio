import { createContext, useContext, useState } from "react";
import { CONTENT } from "./content.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const toggleLang = () => {
    setLang((l) => {
      const next = l === "en" ? "gr" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
