// API.js

// Base URL for your Django REST Framework APIs
const API_BASE_URL = 'http://127.0.0.1:8000';

// API Endpoints
export const loginURL = API_BASE_URL + '/auth/token/';
export const registerURL = API_BASE_URL + '/auth/register/';
export const profileURL = API_BASE_URL + '/auth/profile/';
