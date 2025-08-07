import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

/**
 * AllocationCharts component to display portfolio allocation by sector and market cap
 * @param {Object} props - Component props
 * @param {Object} props.allocation - Portfolio allocation data
 */
const AllocationCharts = ({ allocation }) => {
  // Colors for pie chart segments
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#A4DE6C', '#D0ED57', '#FFC658'];
  
  // Format sector allocation data for pie chart
  const sectorData = Object.entries(allocation.bySector).map(([sector, data]) => ({
    name: sector,
    value: data.value,
    percentage: data.percentage
  }));
  
  // Format market cap allocation data for pie chart
  const marketCapData = Object.entries(allocation.byMarketCap).map(([cap, data]) => ({
    name: cap,
    value: data.value,
    percentage: data.percentage
  }));
  
  // Custom tooltip for pie charts
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
          <p className="label">{`${data.name}: ${data.percentage.toFixed(1)}%`}</p>
          <p className="value">{`₹${data.value.toLocaleString('en-IN')}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="chart-container">
      <Card.Body>
        <Card.Title>Asset Allocation</Card.Title>
        <Row>
          {/* Sector Allocation Pie Chart */}
          <Col md={6}>
            <h6 className="text-center mb-3">By Sector</h6>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          
          {/* Market Cap Allocation Pie Chart */}
          <Col md={6}>
            <h6 className="text-center mb-3">By Market Cap</h6>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={marketCapData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketCapData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AllocationCharts;