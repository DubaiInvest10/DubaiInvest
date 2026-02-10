import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'home': 'Accueil',
    'districts': 'Quartiers',
    'opportunities': 'Opportunités',
    'favorites': 'Favoris',
    'simulator': 'Simulateur',
    'search': 'Rechercher un quartier...',
    'yield': 'Rendement Brut',
    'growth': 'Croissance',
    'price_sqm': 'Prix / m²',
    'data_insufficient': 'Données insuffisantes',
    'back': 'Retour',
    'market_intelligence': 'Intelligence de Marché',
    'total_volume': 'Volume total',
    'districts_analyzed': 'quartiers analysés',
    'stable': 'Stables',
    'warning': 'À surveiller',
    'top_opportunities': 'Top Opportunités',
    'transactions': 'Transactions',
    'opportunity': 'Opportunité',
  },
  en: {
    'home': 'Home',
    'districts': 'Districts',
    'opportunities': 'Opportunities',
    'favorites': 'Favorites',
    'simulator': 'Simulator',
    'search': 'Search a district...',
    'yield': 'Gross Yield',
    'growth': 'Growth',
    'price_sqm': 'Price / sqm',
    'data_insufficient': 'Data insufficient',
    'back': 'Back',
    'market_intelligence': 'Market Intelligence',
    'total_volume': 'Total Volume',
    'districts_analyzed': 'districts analyzed',
    'stable': 'Stable',
    'warning': 'To Watch',
    'top_opportunities': 'Top Opportunities',
    'transactions': 'Transactions',
    'opportunity': 'Opportunity',
  },
  ar: {
    'home': 'الرئيسية',
    'districts': 'المناطق',
    'opportunities': 'الفرص',
    'favorites': 'المفضلة',
    'simulator': 'المحاكي',
    'search': 'البحث عن منطقة...',
    'yield': 'العائد الإجمالي',
    'growth': 'النمو',
    'price_sqm': 'السعر / متر مربع',
    'data_insufficient': 'بيانات غير كافية',
    'back': 'رجوع',
    'market_intelligence': 'استخبارات السوق',
    'total_volume': 'الحجم الإجمالي',
    'districts_analyzed': 'منطقة تم تحليلها',
    'stable': 'مستقر',
    'warning': 'للمراقبة',
    'top_opportunities': 'أفضل الفرص',
    'transactions': 'المعاملات',
    'opportunity': 'فرصة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const saved = await AsyncStorage.getItem('user_language');
      if (saved) setLanguageState(saved as Language);
    } catch (e) {
      console.error('Failed to load language', e);
    }
  };

  const setLanguage = async (lang: Language) => {
    try {
      setLanguageState(lang);
      await AsyncStorage.setItem('user_language', lang);
    } catch (e) {
      console.error('Failed to save language', e);
    }
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export default LanguageProvider;
