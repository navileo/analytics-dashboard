/**
 * Portfolio Controller
 * Handles all portfolio-related API requests
 */

const portfolioData = require('../data/portfolioData');

/**
 * Get all portfolio holdings
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Array} Array of portfolio holdings
 */
const getHoldings = (req, res) => {
  try {
    res.status(200).json(portfolioData.holdings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching holdings data', error: error.message });
  }
};

/**
 * Get portfolio allocation by sector and market cap
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} Portfolio allocation data
 */
const getAllocation = (req, res) => {
  try {
    const allocation = portfolioData.calculateAllocation();
    res.status(200).json(allocation);
  } catch (error) {
    res.status(500).json({ message: 'Error calculating allocation data', error: error.message });
  }
};

/**
 * Get portfolio performance compared to benchmarks
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} Performance comparison data
 */
const getPerformance = (req, res) => {
  try {
    res.status(200).json(portfolioData.performanceData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching performance data', error: error.message });
  }
};

/**
 * Get portfolio summary with key metrics
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} Portfolio summary data
 */
const getSummary = (req, res) => {
  try {
    const summary = portfolioData.calculateSummary();
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: 'Error calculating summary data', error: error.message });
  }
};

module.exports = {
  getHoldings,
  getAllocation,
  getPerformance,
  getSummary
};