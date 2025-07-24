import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ darkMode, setSidebarOpen, isMobile, sidebarOpen }) => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'dashboard', label: t('translations:sidebar.dashboard'), icon: '📊', path: '/dashboard' },
    { id: 'customers', label: t('translations:sidebar.customers'), icon: '👥', path: '/customers' },
    { id: 'subscriptions', label: t('translations:sidebar.subscriptions'), icon: '✉️', path: '/subscriptions' },
    { id: 'balances', label: t('translations:sidebar.balances'), icon: '💰', path: '/balances' },
    { id: 'messages', label: t('translations:sidebar.messages'), icon: '💬', path: '/messages' },
    { id: 'mobile-accounts', label: t('translations:sidebar.mobile_accounts'), icon: '📱', path: '/mobile-accounts' },
    { id: 'packages', label: t('translations:sidebar.packages'), icon: '📦', path: '/packages' }
  ];

  const handleNavLinkClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`w-full md:w-64 h-screen fixed md:relative inset-0 md:inset-auto ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } shadow-lg md:shadow-md z-20 transition-transform duration-300 ease-in-out ${
        isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'md:translate-x-0'
      }`}
    >
      {/* Header with close button for mobile */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="/img/icon.png"
            alt={t('translations:sidebar.logo_alt')}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h1 className="text-xl md:text-2xl font-bold">{t('translations:sidebar.logo_title')}</h1>
        </NavLink>

        {isMobile && (
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="text-xl">✕</span>
          </button>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="overflow-y-auto h-[calc(100vh-80px)]">
        <ul className="space-y-1 p-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-600'
                      : darkMode
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-100 text-gray-800'
                  }`
                }
                onClick={handleNavLinkClick}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;