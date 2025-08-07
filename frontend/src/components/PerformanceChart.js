import React, { useState } from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

/**
 * PerformanceChart component to display portfolio performance compared to benchmarks
 * @param {Object} props - Component props
 * @param {Object} props.performance - Performance data
 */
const PerformanceChart = ({ performance }) => {
  // State for time period selection
  const [timePeriod, setTimePeriod] = useState('1year');

  // Get data for selected time period
  const getTimelineData = () => {
    const { timeline } = performance;
    
    // Filter data based on selected time period
    switch (timePeriod) {
      case '1month':
        return timeline.slice(-2); // Last month
      case '3months':
        return timeline.slice(-4); // Last 3 months
      case '6months':
        return timeline.slice(-7); // Last 6 months
      case '1year':
      default:
        return timeline; // Full year
    }
  };

  // Format date for x-axis
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  };

  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
          <p className="label">{formatDate(label)}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toLocaleString('en-IN')}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="chart-container">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title>Performance Comparison</Card.Title>
          <ButtonGroup size="sm">
            <Button
              variant={timePeriod === '1month' ? 'primary' : 'outline-primary'}
              onClick={() => setTimePeriod('1month')}
            >
              1M
            </Button>
            <Button
              variant={timePeriod === '3months' ? 'primary' : 'outline-primary'}
              onClick={() => setTimePeriod('3months')}
            >
              3M
            </Button>
            <Button
              variant={timePeriod === '6months' ? 'primary' : 'outline-primary'}
              onClick={() => setTimePeriod('6months')}
            >
              6M
            </Button>
            <Button
              variant={timePeriod === '1year' ? 'primary' : 'outline-primary'}
              onClick={() => setTimePeriod('1year')}
            >
              1Y
            </Button>
          </ButtonGroup>
        </div>
        
        {/* Performance Line Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={getTimelineData()}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="portfolio"
              name="Portfolio"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="nifty50"
              name="NIFTY 50"
              stroke="#82ca9d"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="gold"
              name="Gold"
              stroke="#ffc658"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Returns Table */}
        <div className="mt-3">
          <h6>Returns</h6>
          <div className="table-responsive">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th></th>
                  <th>1 Month</th>
                  <th>3 Months</th>
                  <th>1 Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Portfolio</strong></td>
                  <td className={performance.returns.portfolio['1month'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.portfolio['1month'] > 0 ? '+' : ''}
                    {performance.returns.portfolio['1month']}%
                  </td>
                  <td className={performance.returns.portfolio['3months'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.portfolio['3months'] > 0 ? '+' : ''}
                    {performance.returns.portfolio['3months']}%
                  </td>
                  <td className={performance.returns.portfolio['1year'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.portfolio['1year'] > 0 ? '+' : ''}
                    {performance.returns.portfolio['1year']}%
                  </td>
                </tr>
                <tr>
                  <td><strong>NIFTY 50</strong></td>
                  <td className={performance.returns.nifty50['1month'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.nifty50['1month'] > 0 ? '+' : ''}
                    {performance.returns.nifty50['1month']}%
                  </td>
                  <td className={performance.returns.nifty50['3months'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.nifty50['3months'] > 0 ? '+' : ''}
                    {performance.returns.nifty50['3months']}%
                  </td>
                  <td className={performance.returns.nifty50['1year'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.nifty50['1year'] > 0 ? '+' : ''}
                    {performance.returns.nifty50['1year']}%
                  </td>
                </tr>
                <tr>
                  <td><strong>Gold</strong></td>
                  <td className={performance.returns.gold['1month'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.gold['1month'] > 0 ? '+' : ''}
                    {performance.returns.gold['1month']}%
                  </td>
                  <td className={performance.returns.gold['3months'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.gold['3months'] > 0 ? '+' : ''}
                    {performance.returns.gold['3months']}%
                  </td>
                  <td className={performance.returns.gold['1year'] >= 0 ? 'positive-value' : 'negative-value'}>
                    {performance.returns.gold['1year'] > 0 ? '+' : ''}
                    {performance.returns.gold['1year']}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PerformanceChart;