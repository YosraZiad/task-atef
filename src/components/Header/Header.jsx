import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = ({ darkMode, setDarkMode, isMobile, setSidebarOpen }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // تحقق إذا كانت اللغة الحالية هي العربية

  return (
    <header className={`fixed top-0 right-0 left-0  h-16 flex items-center justify-between px-4 md:px-6 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border-b z-10`} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {isMobile && (
        <button
          className={`p-2 mr-2 ${darkMode ? 'text-white' : 'text-black'}`}
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <span className="text-xl">☰</span>
        </button>
      )}

      <div className="flex-1">
        <h2 className={`text-lg md:text-xl font-semibold ${
          darkMode ? 'text-gray-100' : 'text-gray-800'
        }`} style={{ textAlign: isRTL ? 'right' : 'left' }}>
          {t('translations:dashboard')}
        </h2>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <LanguageSwitcher darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
          darkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}>
          <span className="text-sm md:text-base">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;