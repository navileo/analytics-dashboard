/**
 * Unit tests for Portfolio Controller
 */

const portfolioData = require('../data/portfolioData');

describe('Portfolio Data Calculations', () => {
  // Test allocation calculation
  test('calculateAllocation should return sector and market cap allocations', () => {
    const allocation = portfolioData.calculateAllocation();
    
    // Check if allocation object has the expected structure
    expect(allocation).toHaveProperty('bySector');
    expect(allocation).toHaveProperty('byMarketCap');
    
    // Check if at least one sector exists
    expect(Object.keys(allocation.bySector).length).toBeGreaterThan(0);
    
    // Check if at least one market cap category exists
    expect(Object.keys(allocation.byMarketCap).length).toBeGreaterThan(0);
    
    // Check if percentages sum to approximately 100%
    const sectorPercentageSum = Object.values(allocation.bySector)
      .reduce((sum, sector) => sum + sector.percentage, 0);
    expect(sectorPercentageSum).toBeCloseTo(100, 1);
    
    const marketCapPercentageSum = Object.values(allocation.byMarketCap)
      .reduce((sum, cap) => sum + cap.percentage, 0);
    expect(marketCapPercentageSum).toBeCloseTo(100, 1);
  });
  
  // Test summary calculation
  test('calculateSummary should return valid portfolio metrics', () => {
    const summary = portfolioData.calculateSummary();
    
    // Check if summary has all required properties
    expect(summary).toHaveProperty('totalValue');
    expect(summary).toHaveProperty('totalInvested');
    expect(summary).toHaveProperty('totalGainLoss');
    expect(summary).toHaveProperty('totalGainLossPercent');
    expect(summary).toHaveProperty('topPerformer');
    expect(summary).toHaveProperty('worstPerformer');
    expect(summary).toHaveProperty('diversificationScore');
    expect(summary).toHaveProperty('riskLevel');
    
    // Check if total gain/loss is calculated correctly
    expect(summary.totalGainLoss).toBeCloseTo(summary.totalValue - summary.totalInvested, 2);
    
    // Check if top performer has a higher gain than worst performer
    expect(summary.topPerformer.gainPercent).toBeGreaterThan(summary.worstPerformer.gainPercent);
    
    // Check if diversification score is within valid range
    expect(summary.diversificationScore).toBeGreaterThanOrEqual(0);
    expect(summary.diversificationScore).toBeLessThanOrEqual(100);
    
    // Check if risk level is one of the expected values
    expect(['Low', 'Moderate', 'High']).toContain(summary.riskLevel);
  });
});