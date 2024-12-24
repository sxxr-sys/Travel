"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => { },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setIsDarkMode(savedTheme === "dark");
    }, []);

    // Toggle theme and persist in localStorage
    const toggleDarkMode = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
