import React from 'react';

const SidebarItem = ({ icon, label, active, onClick, darkMode }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
          active
            ? darkMode
              ? 'bg-blue-600 text-white'
              : 'bg-blue-100 text-blue-800'
            : darkMode
            ? 'text-gray-300 hover:bg-gray-700'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );
};

export default SidebarItem;