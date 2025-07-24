import React, { useState, useEffect } from 'react';
import { 
  addWhatsAppSubscription,
  updateWhatsAppSubscription,
  getWhatsAppSubscriptionById
} from '../../services/whatsappSubscriptionService';

const SubscriptionForm = ({ subscriptionId, onSuccess }) => {
  const [formData, setFormData] = useState({
    customerId: '',
    packageId: '',
    periodType: 1,
    packagePrice: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (subscriptionId) {
      const fetchSubscription = async () => {
        try {
          const data = await getWhatsAppSubscriptionById(subscriptionId);
          setFormData({
            customerId: data.customerId,
            packageId: data.packageId,
            periodType: data.periodType,
            packagePrice: data.packagePrice
          });
        } catch (err) {
          setError(err.message);
        }
      };
      fetchSubscription();
    }
  }, [subscriptionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (subscriptionId) {
        await updateWhatsAppSubscription(subscriptionId, formData);
      } else {
        await addWhatsAppSubscription(formData);
      }
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        {subscriptionId ? 'Edit' : 'Add'} Subscription
      </h2>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2">Customer ID</label>
            <input
              type="text"
              value={formData.customerId}
              onChange={(e) => setFormData({...formData, customerId: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Package ID</label>
            <input
              type="text"
              value={formData.packageId}
              onChange={(e) => setFormData({...formData, packageId: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Period Type</label>
            <select
              value={formData.periodType}
              onChange={(e) => setFormData({...formData, periodType: parseInt(e.target.value)})}
              className="w-full p-2 border rounded"
            >
              <option value={1}>Monthly</option>
              <option value={4}>Yearly</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Price</label>
            <input
              type="number"
              value={formData.packagePrice}
              onChange={(e) => setFormData({...formData, packagePrice: parseFloat(e.target.value)})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;