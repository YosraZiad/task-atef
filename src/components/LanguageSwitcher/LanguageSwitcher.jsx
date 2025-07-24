import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ darkMode }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang); // تغيير اللغة في i18next
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'; // تحديث اتجاه الصفحة
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleLanguageChange}
      className={`bg-transparent border rounded px-2 py-1 text-sm ${
        darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'
      }`}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;