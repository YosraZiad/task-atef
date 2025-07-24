import React, { useState } from 'react'
import WhatsAppSubscriptionsList from '../../components/whatsapp-subscriptions/WhatsAppSubscriptionsList'
import SubscriptionForm from '../../components/whatsapp-subscriptions/SubscriptionForm'

function WhatsAppSubscriptionsPage() {
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">WhatsApp Subscriptions Management</h1>
        
        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              setEditId(null)
              setShowForm(true)
            }}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New Subscription
          </button>
        </div>

        {showForm ? (
          <SubscriptionForm
            subscriptionId={editId}
            onSuccess={() => {
              setShowForm(false)
              setEditId(null)
            }}
          />
        ) : (
          <WhatsAppSubscriptionsList 
            onEdit={(id) => {
              setEditId(id)
              setShowForm(true)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default WhatsAppSubscriptionsPage