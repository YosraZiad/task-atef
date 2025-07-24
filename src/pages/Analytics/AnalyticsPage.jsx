// AnalyticsPage.jsx - صفحة التحليلات والإحصائيات
import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const AnalyticsPage = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`flex ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="p-6 mt-16">
          <h1 className="text-2xl font-bold">صفحة التحليلات</h1>
          {/* محتوى الصفحة هنا */}
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;