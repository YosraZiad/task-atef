import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AddCustomerModal from './AddCustomerModal';
import ViewCustomerModal from './ViewCustomerModal';
import EditCustomerModal from './EditCustomerModal';
import { 
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById
} from '../../services/customerService';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerList = ({ darkMode }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  // State management
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  
  // API Parameters state
  const [apiParams, setApiParams] = useState({
    Filter: '',
    Sorting: 'creationTime DESC',
    SkipCount: 0,
    MaxResultCount: 100
  });

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Fetch customers with API parameters
  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getCustomers(apiParams);
      setCustomers(response.items || []);
    } catch (error) {
      console.error('Error fetching customers:', error);
      toast.error('Failed to load customers. Please try again.', {
        theme: darkMode ? 'dark' : 'light'
      });
    } finally {
      setLoading(false);
    }
  }, [apiParams, darkMode]);

  useEffect(() => {
    fetchCustomers();
  }, [apiParams, fetchCustomers]);

  // Handle parameter changes
  const handleParamChange = (key, value) => {
    setApiParams(prev => ({
      ...prev,
      [key]: value,
      SkipCount: 0 // Reset to first page when changing filters
    }));
  };

  // Filter customers based on search (client-side)
  const filteredCustomers = customers.filter(customer => {
    const search = searchTerm.toLowerCase();
    return (
      customer.fullName?.toLowerCase().includes(search) ||
      customer.mobileNumber?.includes(searchTerm) ||
      customer.companyName?.toLowerCase().includes(search) ||
      customer.masterMobileNumber?.includes(searchTerm)
    );
  });

  // Pagination calculations (client-side)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  // CRUD Operations
  const handleAddCustomer = async (newCustomer) => {
    try {
      setLoading(true);
      const addedCustomer = await addCustomer(newCustomer);
      setCustomers([addedCustomer, ...customers]);
      setShowAddModal(false);
      toast.success(t('translations:customers.add_success'), {
        theme: darkMode ? 'dark' : 'light'
      });
    } catch (error) {
      console.error('Error adding customer:', error);
      toast.error(t('translations:customers.add_error', { message: error.response?.data?.message || error.message }), {
        theme: darkMode ? 'dark' : 'light'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleViewCustomer = async (customerId) => {
    if (!customerId) {
      console.error(t('translations:customers.invalid_id'));
      return;
    }
    try {
      setLoading(true);
      const customer = await getCustomerById(customerId);
      setSelectedCustomer(customer);
      setShowViewModal(true);
    } catch (error) {
      console.error('Error fetching customer details:', error);
      toast.error(t('translations:customers.fetch_details_error'), {
        theme: darkMode ? 'dark' : 'light'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditCustomer = async (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  const handleUpdateCustomer = async (updatedCustomer) => {
    try {
      setLoading(true);
      const updatedData = await updateCustomer(updatedCustomer.id, updatedCustomer);
      setCustomers(customers.map(c => 
        c.id === updatedData.id ? updatedData : c
      ));
      setShowEditModal(false);
      toast.success(t('translations:customers.update_success'), {
        theme: darkMode ? 'dark' : 'light'
      });
    } catch (error) {
      console.error('Error updating customer:', error);
      toast.error(t('translations:customers.update_error', { message: error.response?.data?.message || error.message }), {
        theme: darkMode ? 'dark' : 'light'
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteCustomer = async (customerId) => {
    if (!window.confirm(t('translations:customers.delete_confirm'))) return;

    try {
      setLoading(true);
      await deleteCustomer(customerId);

      // Update the list without fetching from the server
      setCustomers(prev => prev.filter(c => c.id !== customerId));

      toast.success(t('translations:customers.delete_success'), {
        theme: darkMode ? 'dark' : 'light'
      });
    } catch (error) {
      console.error('Delete error:', error);

      let errorMessage = error.message;
      if (error.response?.status === 404) {
        errorMessage = t('translations:customers.delete_not_found');
      } else if (error.response?.status === 403) {
        errorMessage = t('translations:customers.delete_unauthorized');
      }

      toast.error(errorMessage, {
        theme: darkMode ? 'dark' : 'light'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-4 md:p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <h2 className="text-lg md:text-2xl font-bold text-center md:text-left">{t('translations:customers.title')}</h2>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 md:space-x-reverse">
          {/* Search Input */}
          <div className={`relative w-full md:w-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg px-3 py-2 h-10`}>
            <input
              type="text"
              placeholder={t('translations:customers.search_placeholder')}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className={`w-full h-full bg-transparent border-none focus:outline-none ${darkMode ? 'text-white placeholder-gray-300' : 'text-gray-800'} ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            />
            <svg
              className={`w-5 h-5 absolute ${isRtl ? 'left-3' : 'right-3'} top-2.5 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filter Dropdown */}
          <select
            value={apiParams.Sorting}
            onChange={(e) => handleParamChange('Sorting', e.target.value)}
            className={`w-full md:w-auto border rounded p-2 h-10 text-center ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
          >
            <option value="creationTime DESC">{t('translations:customers.sort.newest_first')}</option>
            <option value="creationTime ASC">{t('translations:customers.sort.oldest_first')}</option>
            <option value="fullName ASC">{t('translations:customers.sort.name_asc')}</option>
            <option value="fullName DESC">{t('translations:customers.sort.name_desc')}</option>
          </select>

          {/* Refresh Button */}
          <button
            onClick={fetchCustomers}
            className={`w-full md:w-auto px-4 py-2 h-10 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-600 hover:bg-gray-700 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {t('translations:customers.refresh')}
          </button>

          {/* Add Customer Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className={`w-full md:w-auto px-4 py-2 h-10 rounded-lg transition-colors ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            disabled={loading}
          >
            {t('translations:customers.add_customer')}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    {t('translations:customers.table.name')}
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    {t('translations:customers.table.company')}
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    {t('translations:customers.table.mobile')}
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    {t('translations:customers.table.master_mobile')}
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    {t('translations:customers.table.actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {currentItems.length > 0 ? (
                  currentItems.map((customer) => (
                    <tr key={customer.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">{customer.fullName || '-'}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">{customer.companyName || '-'}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">{customer.mobileNumber || '-'}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">{customer.masterMobileNumber || '-'}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className={`flex ${isRtl ? 'space-x-reverse' : ''} space-x-3`}>
                          <button
                            onClick={() => handleViewCustomer(customer.id)}
                            className={`flex items-center px-3 py-1 rounded-md text-sm ${
                              darkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                          >
                            <EyeIcon className="h-4 w-4 mr-1" />
                            {t('translations:customers.actions.view')}
                          </button>
                          <button
                            onClick={() => handleEditCustomer(customer)}
                            className={`flex items-center px-3 py-1 rounded-md text-sm ${
                              darkMode
                                ? 'bg-gray-600 hover:bg-gray-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                            }`}
                          >
                            <PencilIcon className="h-4 w-4 mr-1" />
                            {t('translations:customers.actions.edit')}
                          </button>
                          <button
                            onClick={() => handleDeleteCustomer(customer.id)}
                            className={`flex items-center px-3 py-1 rounded-md text-sm ${
                              darkMode
                                ? 'bg-red-600 hover:bg-red-500 text-white'
                                : 'bg-red-200 hover:bg-red-300 text-red-800'
                            }`}
                          >
                            <TrashIcon className="h-4 w-4 mr-1" />
                            {t('translations:customers.actions.delete')}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 md:px-6 py-4 text-center">
                      {t('translations:customers.no_customers')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={`flex flex-col md:flex-row items-center justify-between mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="mb-2 md:mb-0">
              <span className="mr-2">{t('translations:customers.items_per_page')}:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className={`border rounded p-1 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              >
                {[5, 10, 20, 50, 100].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded transition-colors ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
                }`}
              >
                {t('translations:customers.pagination.previous')}
              </button>
              <span>
                {t('translations:customers.pagination.page')} {currentPage} {t('translations:customers.pagination.of')} {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded transition-colors ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
                }`}
              >
                {t('translations:customers.pagination.next')}
              </button>
            </div>
            <div className="mt-2 md:mt-0">
              {t('translations:customers.pagination.showing')} {indexOfFirstItem + 1} {t('translations:customers.pagination.to')}{' '}
              {Math.min(indexOfLastItem, filteredCustomers.length)} {t('translations:customers.pagination.of')}{' '}
              {filteredCustomers.length} {t('translations:customers.pagination.entries')}
            </div>
          </div>
        </>
      )}

      {/* Modals */}
      <AddCustomerModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddCustomer}
        darkMode={darkMode}
      />

      <ViewCustomerModal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        customer={selectedCustomer}
        darkMode={darkMode}
      />

      <EditCustomerModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleUpdateCustomer}
        customer={selectedCustomer}
        darkMode={darkMode}
      />
    </div>
  );
};

export default CustomerList;