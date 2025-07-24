// src/services/whatsappSubscriptionService.js
import api from './api'

export const getWhatsAppSubscriptions = async (params = {}) => {
  try {
    const response = await api.get('/customer-subscription', {
      params: {
        Sorting: params.sorting || '',
        SkipCount: params.skipCount || 0,
        MaxResultCount: params.maxResultCount || 10
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching WhatsApp subscriptions:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    
    if (error.response?.status === 403) {
      throw new Error('You are not authorized to perform this action');
    }
    throw error;
  }
};

export const addWhatsAppSubscription = async (subscriptionData) => {
  try {
    const response = await api.post('/customer-subscription', subscriptionData);
    return response.data;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('You are not authorized to perform this action');
    }
    throw error;
  }
};

export const getWhatsAppSubscriptionById = async (id) => {
  if (!id) {
    throw new Error('Subscription ID is required');
  }
  
  try {
    const response = await api.get(`/customer-subscription/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching WhatsApp subscription details:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      error: error.message
    });
    
    if (error.response?.status === 404) {
      throw new Error('Subscription not found');
    }
    throw error;
  }
};

export const updateWhatsAppSubscription = async (id, subscriptionData) => {
  // لا داعي للـ try/catch هنا إذا لم تضف معالجة خاصة للأخطاء
  const response = await api.put(`/customer-subscription/${id}`, subscriptionData);
  return response.data;
};

export const deleteWhatsAppSubscription = async (id) => {
  if (!id) {
    throw new Error('Subscription ID is required');
  }
  
  try {
    const response = await api.delete(`/customer-subscription/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 500) {
      throw new Error('Server error - please try again later');
    }
    throw new Error('Failed to delete subscription');
  }
};