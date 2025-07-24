// 
import axios from 'axios'

const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDc0ODU4NiwiaWF0IjoxNzUzMjEyNTg2LCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiIyZjczY2M0ZC02NWY5LTRlNjEtYjA5Zi1kZjhhMmQ3MDgxZjUiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiMDI0NzQ5MjAtMDNjOC1jZmJkLTlmZGYtM2ExYjQ1YzllMmNiIn0.3pGqkcS_FJ8Gz_7KBKyS3Pvxb5nWNJ7Om5RUDI0wB7P46LkzztgkZPuHkf53Nq_yvT5TsmLPTST6PmnPvgUJpFzPSWIFvnmnOVFF_n8DcOO6bk6ni17vvA6GZQIPc0cYwvqCChel7dMj-nF76v1sC8ES82rgZdta4JYdDGR9ikul2QwtQWTh2rwJyJBRblo4uOx5QHTzANrLwDrgUbmyJOHbNeCgi8nco89hpIuvVJv8N4mq6rrZiOMQTlYx4iLM83osaqsm47-UjZmZcA33kqJk9j0-FsOSNrsd43bZznwWg7QEd5okxvXOSVrvDpc9vYWunTHv_E7mAqryZ79Mhg'

const api = axios.create({
  baseURL: '/api', // سيتم تحويله عبر البروكسي
 timeout: 30000,
  headers: {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
  }
})

// اعتراض الطلبات
api.interceptors.request.use(
  (config) => {
    console.log('Request Config:', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// اعتراض الردود
api.interceptors.response.use(
  (response) => {
    console.log('Response:', response)
    return response
  },
  (error) => {
    console.error('API Error:', error)
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Data:', error.response.data)
    }
    return Promise.reject(error)
  }
)
api.interceptors.request.use(config => {
  if (!config.url) {
    throw new Error('API URL is undefined');
  }
  return config;
});

export default api