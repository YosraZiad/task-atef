import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-full ${
        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <span className="text-yellow-300">☀️</span>
      ) : (
        <span className="text-gray-600">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;