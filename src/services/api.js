import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://charity-backend-gcnw.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (data) => api.post('/auth/login', data),
};

export const itemService = {
  getCharityItems: (compId) => api.get(`/charity-items?comp_id=${compId}`),
  create: (data) => api.post('/charity-items', data),
  update: (id, data) => api.put(`/charity-items/${id}`, data),
  delete: (id) => api.delete(`/charity-items/${id}`),
};

export const charityService = {
  list: () => api.get('/charity-data'),
};

export const vendorService = {
  list: () => api.get('/users/vendors'),
  create: (data) => api.post('/users/vendors', data),
  update: (id, data) => api.put(`/users/vendors/${id}`, data),
  delete: (id) => api.delete(`/users/vendors/${id}`),
};

export const customerService = {
  list: () => api.get('/customers'),
  create: (data) => api.post('/customers', data),
  update: (id, data) => api.put(`/customers/${id}`, data),
  delete: (id) => api.delete(`/customers/${id}`),
};

export const bookingService = {
  list: () => api.get('/bookings'),
  create: (data) => api.post('/bookings', data),
  update: (id, data) => api.put(`/bookings/${id}`, data),
  delete: (id) => api.delete(`/bookings/${id}`),
  approve: (id) => api.post(`/bookings/${id}/approve`),
  getShareCodes: () => api.get('/share-codes'),
  getDepartments: () => api.get('/departments'),
  migrateQurbani: () => api.get('/migrate-qurbani'),
  getCompany: () => api.get('/company'),
  getAvailableYears: () => api.get('/bookings/years'),
  getCollectionSummary: () => api.get('/bookings/collection-summary'),
  getComparisonSummary: () => api.get('/bookings/comparison-summary'),
};

export const qurbaniDateService = {
  list: () => api.get('/qurbani-dates'),
  create: (data) => api.post('/qurbani-dates', data),
  update: (id, data) => api.put(`/qurbani-dates/${id}`, data),
  delete: (id) => api.delete(`/qurbani-dates/${id}`),
};

export const departmentMasterService = {
  list: () => api.get('/departments-master'),
  create: (data) => api.post('/departments-master', data),
  update: (id, data) => api.put(`/departments-master/${id}`, data),
  delete: (id) => api.delete(`/departments-master/${id}`),
};

export default api;
