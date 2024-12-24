"use client"
// context/LanguageContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
    language: string;
    setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<string>('mn');

    // Check localStorage for the preferred language
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const changeLanguage = (language: string) => {
        setLanguage(language);
        localStorage.setItem('language', language); // Persist the language choice
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export { LanguageProvider, useLanguage };
