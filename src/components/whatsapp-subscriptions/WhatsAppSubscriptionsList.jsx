import React, { useState, useEffect } from 'react';
import { 
  getWhatsAppSubscriptions,
  deleteWhatsAppSubscription 
} from '../../services/whatsappSubscriptionService';

const WhatsAppSubscriptionsList = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    skipCount: 0,
    maxResultCount: 10
  });

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      const data = await getWhatsAppSubscriptions(pagination);
      setSubscriptions(data.items);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // حل مشكلة eslint/react-hooks/exhaustive-deps:
  useEffect(() => {
    const fetch = async () => {
      await fetchSubscriptions();
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this subscription?')) {
      try {
        await deleteWhatsAppSubscription(id);
        fetchSubscriptions();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">WhatsApp Subscriptions</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Customer ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Package</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map(sub => (
              <tr key={sub.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{sub.customerId}</td>
                <td className="py-2 px-4 border">{sub.customerFullName}</td>
                <td className="py-2 px-4 border">{sub.packageName}</td>
                <td className="py-2 px-4 border">${sub.totalAmount}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleDelete(sub.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPagination(prev => ({
            ...prev,
            skipCount: Math.max(0, prev.skipCount - prev.maxResultCount)
          }))}
          disabled={pagination.skipCount === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => setPagination(prev => ({
            ...prev,
            skipCount: prev.skipCount + prev.maxResultCount
          }))}
          disabled={subscriptions.length < pagination.maxResultCount}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WhatsAppSubscriptionsList;