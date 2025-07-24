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
    // التحقق من وجود معرف العميل
    if (!id) {
      throw new Error('معرف العميل مطلوب لعملية التحديث');
    }

    // تسجيل البيانات المرسلة للتشخيص
    console.log('تحديث العميل - المعرف:', id);
    console.log('تحديث العميل - البيانات:', customerData);

    const response = await api.put(`/customer/${id}`, customerData);
    
    console.log('تحديث العميل - الاستجابة:', response.data);
    toast.success('تم تحديث بيانات العميل بنجاح');
    
    return response.data;
  } catch (error) {
    // تسجيل تفاصيل الخطأ للتشخيص
    console.error('خطأ في تحديث العميل:', {
      customerId: id,
      customerData: customerData,
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url,
      timestamp: new Date().toISOString()
    });

    // رسالة خطأ مفصلة حسب نوع الخطأ
    let errorMessage = 'فشل في تحديث بيانات العميل.';
    
    if (error.response?.status === 401) {
      errorMessage = 'انتهت صلاحية الجلسة. يرجى تسجيل الدخول مرة أخرى.';
    } else if (error.response?.status === 403) {
      errorMessage = 'ليس لديك صلاحية لتعديل هذا العميل.';
    } else if (error.response?.status === 404) {
      errorMessage = 'العميل المطلوب تعديله غير موجود.';
    } else if (error.response?.status === 400) {
      errorMessage = 'البيانات المدخلة غير صحيحة. يرجى التحقق من المدخلات.';
    } else if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    
    toast.error(errorMessage);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    // التحقق من وجود معرف العميل
    if (!id) {
      throw new Error('معرف العميل مطلوب');
    }

    // إرسال طلب الحذف إلى API
    const response = await api.delete(`/customer/${id}`);
    
    // إرجاع النتيجة
    return response.data || { 
      success: true, 
      message: 'تم حذف العميل بنجاح',
      id: id
    };
  } catch (error) {
    // تسجيل تفاصيل الخطأ للتشخيص
    console.error('Error deleting customer:', {
      customerId: id,
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url,
      timestamp: new Date().toISOString()
    });

    // رفع الخطأ مع معلومات مفيدة
    const enhancedError = new Error(error.response?.data?.message || error.message || 'فشل في حذف العميل');
    enhancedError.response = error.response;
    enhancedError.customerId = id;
    
    throw enhancedError;
  }
};