import api from './api';
import { toast } from 'react-toastify';

export const getCustomers = async (params = {}) => {
  try {
    const response = await api.get('/customer', {
      params: {
        Filter: params.Filter || '',
        Sorting: params.Sorting || 'creationTime DESC',
        SkipCount: params.SkipCount || 0,
        MaxResultCount: params.MaxResultCount || 100
      }
    });
    
    // Handle different response structures
    if (response.data && response.data.items) {
      return {
        items: response.data.items,
        totalCount: response.data.totalCount || response.data.items.length
      };
    }
    
    // If response is directly an array
    if (Array.isArray(response.data)) {
      return {
        items: response.data,
        totalCount: response.data.length
      };
    }
    
    // Fallback for other structures
    return {
      items: [],
      totalCount: 0
    };
    
  } catch (error) {
    toast.error('فشل في جلب العملاء. يرجى المحاولة مرة أخرى.');
    console.error('Error fetching customers:', error);
    throw error;
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await api.get(`/customer/${id}`);
    return response.data;
  } catch (error) {
    toast.error('فشل في جلب تفاصيل العميل.');
    console.error('Error fetching customer:', error);
    throw error;
  }
};

export const addCustomer = async (customerData) => {
  try {
    const response = await api.post('/customer', customerData);
    return response.data;
  } catch (error) {
    toast.error('فشل في إضافة عميل جديد. يرجى التحقق من المدخلات والمحاولة مرة أخرى.');
    console.error('Error adding customer:', error);
    throw error;
  }
};

export const updateCustomer = async (id, customerData) => {
  try {
    const response = await api.put(`/customer/${id}`, customerData);
    return response.data;
  } catch (error) {
    toast.error('فشل في تحديث بيانات العميل. يرجى المحاولة مرة أخرى.');
    console.error('Error updating customer:', error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await api.delete(`/customer/${id}`);
    return response.data || { success: true, message: 'تم حذف العميل بنجاح' };
  } catch (error) {
    // Log detailed error information for debugging
    console.error('Error deleting customer:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });

    // Show a toast notification with a user-friendly message
    if (error.response?.status === 404) {
      toast.error('العميل غير موجود. يرجى التحقق من البيانات.');
    } else if (error.response?.status === 403) {
      toast.error('ليس لديك صلاحية لحذف هذا العميل.');
    } else {
      toast.error('فشل في حذف العميل. يرجى المحاولة مرة أخرى.');
    }

    // Throw a new error with a detailed message
    throw new Error(error.response?.data?.message || 'فشل في حذف العميل');
  }
};