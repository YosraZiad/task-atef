import { useState, useEffect } from 'react'
import CustomerList from '../../components/Customers/CustomerList'
import { getCustomers } from '../../services/customerService'

export default function CustomersPage({ darkMode }) {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCustomers = async () => {
    try {
      setLoading(true)
      const data = await getCustomers()
      setCustomers(Array.isArray(data.items) ? data.items : [])
      setError(null)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to load customers')
      setCustomers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  if (loading) return <div className="flex justify-center items-center h-64 mt-6">
    <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${
      darkMode ? 'border-blue-400' : 'border-blue-500'
    }`}></div>
  </div>
  if (error) return (
    <div className={`p-4 mb-6 rounded-lg ${
      darkMode ? 'bg-red-800 text-red-100' : 'bg-red-100 text-red-800'
    }`}>
      {error}
    </div>
  )

  return (
    <div className={`pt-20 p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen w-full`}>
      <div className="w-full">
        {/* Main Content */}
        {customers.length > 0 ? (
          <CustomerList 
            customers={customers} 
            darkMode={darkMode}
            onRefresh={fetchCustomers}
          />
        ) : (
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            No customers found.
          </div>
        )}
      </div>
    </div>
  )
}