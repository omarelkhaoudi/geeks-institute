import { createContext, useState, useContext } from "react";

// 1️⃣ Crée le contexte
const ThemeContext = createContext();

// 2️⃣ Crée un provider qui gère l'état du thème
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Fonction pour basculer entre les deux thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Valeurs partagées dans tout le contexte
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Custom hook pratique
export function useTheme() {
  return useContext(ThemeContext);
}
