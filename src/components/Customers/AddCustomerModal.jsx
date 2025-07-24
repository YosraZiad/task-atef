import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddCustomerModal = ({ isOpen, onClose, onSubmit, darkMode }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    masterMobileNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${darkMode ? 'dark' : ''}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-lg leading-6 font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} ${isRtl ? 'text-right' : 'text-left'}`}>
              {t('translations:add_customer_modal.title')}
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:add_customer_modal.full_name')}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:add_customer_modal.company_name')}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              
              <div className="mb-4">
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:add_customer_modal.mobile_number')}
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:add_customer_modal.master_mobile_number')}
                </label>
                <input
                  type="text"
                  name="masterMobileNumber"
                  value={formData.masterMobileNumber}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:col-start-2 sm:text-sm`}
                >
                  {t('translations:add_customer_modal.add_button')}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className={`mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm ${
                    darkMode 
                      ? 'bg-gray-600 text-white hover:bg-gray-500 border-gray-500' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                  }`}
                >
                  {t('translations:add_customer_modal.cancel_button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;