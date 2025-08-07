/**
 * Sample portfolio data for the Indian Stock Portfolio Analytics Dashboard
 * This file contains mock data for demonstration purposes
 */

// Portfolio holdings data
const holdings = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries Limited',
    quantity: 50,
    avgPrice: 2450.00,
    currentPrice: 2680.50,
    sector: 'Energy',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 134025.00,
    gainLoss: 11525.00,
    gainLossPercent: 9.39
  },
  {
    symbol: 'INFY',
    name: 'Infosys Limited',
    quantity: 100,
    avgPrice: 1800.00,
    currentPrice: 2010.75,
    sector: 'Technology',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 201075.00,
    gainLoss: 21075.00,
    gainLossPercent: 11.71
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    quantity: 75,
    avgPrice: 3200.00,
    currentPrice: 3450.25,
    sector: 'Technology',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 258768.80,
    gainLoss: 18768.75,
    gainLossPercent: 7.82
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Limited',
    quantity: 80,
    avgPrice: 1650.00,
    currentPrice: 1580.30,
    sector: 'Banking',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 126424.00,
    gainLoss: -5576.00,
    gainLossPercent: -4.22
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank Limited',
    quantity: 60,
    avgPrice: 1100.00,
    currentPrice: 1235.80,
    sector: 'Banking',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 74148.00,
    gainLoss: 8148.00,
    gainLossPercent: 12.34
  },
  {
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel Limited',
    quantity: 120,
    avgPrice: 850.00,
    currentPrice: 920.45,
    sector: 'Telecommunications',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 110454.00,
    gainLoss: 8454.00,
    gainLossPercent: 8.28
  },
  {
    symbol: 'ITC',
    name: 'ITC Limited',
    quantity: 200,
    avgPrice: 420.00,
    currentPrice: 465.20,
    sector: 'Consumer Goods',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 93040.00,
    gainLoss: 9040.00,
    gainLossPercent: 10.76
  },
  {
    symbol: 'BAJFINANCE',
    name: 'Bajaj Finance Limited',
    quantity: 25,
    avgPrice: 6800.00,
    currentPrice: 7150.60,
    sector: 'Financial Services',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 178765.00,
    gainLoss: 8765.00,
    gainLossPercent: 5.15
  },
  {
    symbol: 'ASIANPAINT',
    name: 'Asian Paints Limited',
    quantity: 40,
    avgPrice: 3100.00,
    currentPrice: 2890.75,
    sector: 'Consumer Discretionary',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 115630.00,
    gainLoss: -8370.00,
    gainLossPercent: -6.75
  },
  {
    symbol: 'MARUTI',
    name: 'Maruti Suzuki India Limited',
    quantity: 30,
    avgPrice: 9500.00,
    currentPrice: 10250.30,
    sector: 'Automotive',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 307509.00,
    gainLoss: 22509.00,
    gainLossPercent: 7.90
  },
  {
    symbol: 'WIPRO',
    name: 'Wipro Limited',
    quantity: 150,
    avgPrice: 450.00,
    currentPrice: 485.60,
    sector: 'Technology',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 72840.00,
    gainLoss: 5340.00,
    gainLossPercent: 7.91
  },
  {
    symbol: 'TATAMOTORS',
    name: 'Tata Motors Limited',
    quantity: 100,
    avgPrice: 650.00,
    currentPrice: 720.85,
    sector: 'Automotive',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 72085.00,
    gainLoss: 7085.00,
    gainLossPercent: 10.90
  },
  {
    symbol: 'TECHM',
    name: 'Tech Mahindra Limited',
    quantity: 80,
    avgPrice: 1200.00,
    currentPrice: 1145.25,
    sector: 'Technology',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 91620.00,
    gainLoss: -4380.00,
    gainLossPercent: -4.56
  },
  {
    symbol: 'AXISBANK',
    name: 'Axis Bank Limited',
    quantity: 90,
    avgPrice: 980.00,
    currentPrice: 1055.40,
    sector: 'Banking',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 94986.00,
    gainLoss: 6786.00,
    gainLossPercent: 7.69
  },
  {
    symbol: 'SUNPHARMA',
    name: 'Sun Pharmaceutical Industries',
    quantity: 60,
    avgPrice: 1150.00,
    currentPrice: 1245.30,
    sector: 'Healthcare',
    marketCap: 'Large',
    exchange: 'NSE',
    value: 74718.00,
    gainLoss: 5718.00,
    gainLossPercent: 8.29
  }
];

// Calculate portfolio allocation
const calculateAllocation = () => {
  // Initialize sector and market cap objects
  const bySector = {};
  const byMarketCap = {};
  
  // Calculate total portfolio value
  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  
  // Group by sector
  holdings.forEach(holding => {
    // For sector allocation
    if (!bySector[holding.sector]) {
      bySector[holding.sector] = { value: 0, percentage: 0 };
    }
    bySector[holding.sector].value += holding.value;
    
    // For market cap allocation
    if (!byMarketCap[holding.marketCap]) {
      byMarketCap[holding.marketCap] = { value: 0, percentage: 0 };
    }
    byMarketCap[holding.marketCap].value += holding.value;
  });
  
  // Calculate percentages
  Object.keys(bySector).forEach(sector => {
    bySector[sector].percentage = parseFloat(((bySector[sector].value / totalValue) * 100).toFixed(1));
  });
  
  Object.keys(byMarketCap).forEach(cap => {
    byMarketCap[cap].percentage = parseFloat(((byMarketCap[cap].value / totalValue) * 100).toFixed(1));
  });
  
  return { bySector, byMarketCap };
};

// Performance data (timeline and returns)
const performanceData = {
  timeline: [
    { date: '2023-01-01', portfolio: 600000, nifty50: 18000, gold: 55000 },
    { date: '2023-02-01', portfolio: 610000, nifty50: 18200, gold: 54500 },
    { date: '2023-03-01', portfolio: 615000, nifty50: 18400, gold: 56000 },
    { date: '2023-04-01', portfolio: 625000, nifty50: 18600, gold: 57000 },
    { date: '2023-05-01', portfolio: 630000, nifty50: 18800, gold: 57500 },
    { date: '2023-06-01', portfolio: 640000, nifty50: 19000, gold: 58000 },
    { date: '2023-07-01', portfolio: 645000, nifty50: 19200, gold: 58500 },
    { date: '2023-08-01', portfolio: 650000, nifty50: 19400, gold: 59000 },
    { date: '2023-09-01', portfolio: 655000, nifty50: 19600, gold: 59500 },
    { date: '2023-10-01', portfolio: 660000, nifty50: 19800, gold: 60000 },
    { date: '2023-11-01', portfolio: 670000, nifty50: 20000, gold: 60500 },
    { date: '2023-12-01', portfolio: 680000, nifty50: 20500, gold: 61000 },
    { date: '2024-01-01', portfolio: 690000, nifty50: 21000, gold: 62000 },
    { date: '2024-02-01', portfolio: 695000, nifty50: 21200, gold: 62500 },
    { date: '2024-03-01', portfolio: 700000, nifty50: 21500, gold: 63000 }
  ],
  returns: {
    portfolio: { '1month': 2.3, '3months': 8.1, '1year': 15.7 },
    nifty50: { '1month': 1.4, '3months': 4.9, '1year': 19.4 },
    gold: { '1month': 0.8, '3months': 3.3, '1year': 14.5 }
  }
};

// Calculate portfolio summary
const calculateSummary = () => {
  // Calculate total values
  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalInvested = holdings.reduce((sum, holding) => sum + (holding.avgPrice * holding.quantity), 0);
  const totalGainLoss = totalValue - totalInvested;
  const totalGainLossPercent = parseFloat(((totalGainLoss / totalInvested) * 100).toFixed(2));
  
  // Find top and worst performers
  const sortedByPerformance = [...holdings].sort((a, b) => b.gainLossPercent - a.gainLossPercent);
  const topPerformer = {
    symbol: sortedByPerformance[0].symbol,
    name: sortedByPerformance[0].name,
    gainPercent: sortedByPerformance[0].gainLossPercent
  };
  
  const worstPerformer = {
    symbol: sortedByPerformance[sortedByPerformance.length - 1].symbol,
    name: sortedByPerformance[sortedByPerformance.length - 1].name,
    gainPercent: sortedByPerformance[sortedByPerformance.length - 1].gainLossPercent
  };
  
  // Calculate diversification score (simple implementation)
  // Higher score means better diversification (max 100)
  const sectorCount = Object.keys(calculateAllocation().bySector).length;
  const marketCapCount = Object.keys(calculateAllocation().byMarketCap).length;
  const stockCount = holdings.length;
  
  // Simple formula: based on number of sectors, market caps and stocks
  const diversificationScore = Math.min(
    Math.round((sectorCount / 10) * 40 + (marketCapCount / 3) * 30 + (stockCount / 20) * 30),
    100
  );
  
  // Risk level based on diversification and volatility
  let riskLevel;
  if (diversificationScore >= 80) {
    riskLevel = 'Low';
  } else if (diversificationScore >= 60) {
    riskLevel = 'Moderate';
  } else {
    riskLevel = 'High';
  }
  
  return {
    totalValue,
    totalInvested,
    totalGainLoss,
    totalGainLossPercent,
    topPerformer,
    worstPerformer,
    diversificationScore,
    riskLevel
  };
};

module.exports = {
  holdings,
  calculateAllocation,
  performanceData,
  calculateSummary
};