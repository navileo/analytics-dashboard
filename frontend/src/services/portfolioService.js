import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://portfolio-analytics-backend.onrender.com/api/portfolio'
  : '/api/portfolio';

/**
 * Get all portfolio holdings
 * @returns {Promise<Array>} Array of portfolio holdings
 */
export const getHoldings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/holdings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching holdings:', error);
    throw error;
  }
};

/**
 * Get portfolio allocation by sector and market cap
 * @returns {Promise<Object>} Portfolio allocation data
 */
export const getAllocation = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/allocation`);
    return response.data;
  } catch (error) {
    console.error('Error fetching allocation:', error);
    throw error;
  }
};

/**
 * Get portfolio performance compared to benchmarks
 * @returns {Promise<Object>} Performance comparison data
 */
export const getPerformance = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/performance`);
    return response.data;
  } catch (error) {
    console.error('Error fetching performance:', error);
    throw error;
  }
};

/**
 * Get portfolio summary with key metrics
 * @returns {Promise<Object>} Portfolio summary data
 */
export const getSummary = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/summary`);
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
};