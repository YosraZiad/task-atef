import React from 'react';
import { useTranslation } from 'react-i18next';

const ViewCustomerModal = ({ isOpen, onClose, customer, darkMode }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  if (!isOpen || !customer) return null;

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
              {t('translations:view_customer_modal.title')}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:view_customer_modal.full_name')}
                </label>
                <p className={`mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {customer.fullName || '-'}
                </p>
              </div>
              
              <div>
                <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:view_customer_modal.company_name')}
                </label>
                <p className={`mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {customer.companyName || '-'}
                </p>
              </div>
              
              <div>
                <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:view_customer_modal.mobile_number')}
                </label>
                <p className={`mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {customer.mobileNumber || '-'}
                </p>
              </div>
              
              <div>
                <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:view_customer_modal.master_mobile_number')}
                </label>
                <p className={`mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {customer.masterMobileNumber || '-'}
                </p>
              </div>
              
              <div>
                <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('translations:view_customer_modal.creation_time')}
                </label>
                <p className={`mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} ${isRtl ? 'text-right' : 'text-left'}`}>
                  {customer.creationTime ? new Date(customer.creationTime).toLocaleString() : '-'}
                </p>
              </div>
            </div>
            
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={onClose}
                className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm`}
              >
                {t('translations:view_customer_modal.close_button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomerModal;