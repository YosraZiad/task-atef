import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
// import '../../i18n';
import { useTranslation  } from 'react-i18next';
const DashboardPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
const { t } = useTranslation(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto">
      
        
        <div className={`flex-1 ${!isMobile ? 'md:ml-64' : ''}`}>
          
          
          <main className="p-4 md:p-6 mt-16">
            {/* Grid Container */}
             <h1 className="text-2xl mt-4">{t('translations:welcome')}</h1>
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              
              {/* Left Section - 8 Columns */}
              <div className="lg:col-span-8 space-y-4">
                {/* Quick Access Buttons */}
                <div className={`p-4 rounded-xl shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {['Ctrl K', 'Blocks', 'Templates', 'Kit', 'Sign in', 'Get full access'].map((item) => (
                      <button
                        key={item}
                        className={`p-2 rounded-lg text-center text-sm transition-all ${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* UI Blocks Section */}
                <div className={`p-4 rounded-xl shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className="text-lg font-bold mb-3">UI Blocks</h2>
                  <div className="space-y-2">
                    {['Application UI', 'Application Shells'].map((item) => (
                      <div 
                        key={item}
                        className={`p-3 rounded-lg ${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Section - 4 Columns */}
              <div className="lg:col-span-4 space-y-4">
                {/* Documents Section */}
                <div className={`p-4 rounded-xl shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className="text-lg font-bold mb-3">Documents</h2>
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      Reports
                    </div>
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <div className="font-medium mb-2">Your teams</div>
                      <div className="space-y-2 pl-2">
                        {['Heroicons', 'Tailwind Labs', 'Workcotton'].map((team) => (
                          <div key={team} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={team}
                              className="mr-2"
                            />
                            <label htmlFor={team}>{team}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Settings Section */}
                <div className={`p-4 rounded-xl shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className="text-lg font-bold mb-3">Settings</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Profile', 'Notifications', 'Security', 'Theme', 'Language', 'Help'].map((item) => (
                      <div 
                        key={item}
                        className={`p-2 rounded-lg flex items-center justify-between ${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <span>{item}</span>
                        <span>→</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;