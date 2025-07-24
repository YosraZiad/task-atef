import './i18n';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Removed BrowserRouter
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/DashboardPage.jsx';
import Customers from './pages/Customers/CustomersPage.jsx';
import WhatsAppSubscriptionsPage from './pages/whatsapp-subscriptions/WhatsAppSubscriptionsPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Switch language
  };

  const [darkMode, setDarkMode] = useState(() => {
    // قراءة الوضع من localStorage أو الافتراضي
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // تحديث localStorage عند تغيير الوضع
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // إضافة خاصية التمرير الناعم
    const htmlElement = document.documentElement;
    htmlElement.style.scrollBehavior = 'smooth';

    // تأكد من إعادة تعيين الخاصية عند إلغاء المكون
    return () => {
      htmlElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`flex h-screen overflow-hidden`}>
        <Sidebar
          darkMode={darkMode}
          setSidebarOpen={setSidebarOpen}
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
        />
        <div className="flex-1">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            isMobile={isMobile}
            setSidebarOpen={setSidebarOpen}
          />
          <main className="overflow-y-auto w-full">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers darkMode={darkMode} />} />
              <Route path="/subscriptions" element={<WhatsAppSubscriptionsPage />} />
              {/* Add other routes here */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
            <ToastContainer />
          </main>
        </div>
      </div>
      <div>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('ar')}>العربية</button>
      </div>
    </div>
  );
};

export default App;




