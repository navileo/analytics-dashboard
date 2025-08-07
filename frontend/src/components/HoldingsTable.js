import React, { useState } from 'react';
import { Card, Table, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

/**
 * HoldingsTable component to display portfolio holdings in a sortable and searchable table
 * @param {Object} props - Component props
 * @param {Array} props.holdings - Portfolio holdings data
 */
const HoldingsTable = ({ holdings }) => {
  // State for search query and sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'value',
    direction: 'desc'
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle column header click for sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Filter holdings based on search query
  const filteredHoldings = holdings.filter(holding => {
    return (
      holding.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      holding.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      holding.sector.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Sort holdings based on sort configuration
  const sortedHoldings = [...filteredHoldings].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(value);
  };

  // Format percentage values
  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  // Get sort indicator for column headers
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
    }
    return '';
  };

  return (
    <Card className="holdings-table">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center mb-3">
          <span>Holdings</span>
          <InputGroup className="w-50">
            <InputGroup.Text>
              <Search />
            </InputGroup.Text>
            <Form.Control
              className="search-input"
              placeholder="Search by name, symbol, or sector"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Card.Title>
        
        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th onClick={() => handleSort('symbol')} style={{ cursor: 'pointer' }}>
                  Symbol{getSortIndicator('symbol')}
                </th>
                <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                  Name{getSortIndicator('name')}
                </th>
                <th onClick={() => handleSort('quantity')} style={{ cursor: 'pointer' }}>
                  Quantity{getSortIndicator('quantity')}
                </th>
                <th onClick={() => handleSort('avgPrice')} style={{ cursor: 'pointer' }}>
                  Avg Price{getSortIndicator('avgPrice')}
                </th>
                <th onClick={() => handleSort('currentPrice')} style={{ cursor: 'pointer' }}>
                  Current Price{getSortIndicator('currentPrice')}
                </th>
                <th onClick={() => handleSort('sector')} style={{ cursor: 'pointer' }}>
                  Sector{getSortIndicator('sector')}
                </th>
                <th onClick={() => handleSort('value')} style={{ cursor: 'pointer' }}>
                  Value{getSortIndicator('value')}
                </th>
                <th onClick={() => handleSort('gainLossPercent')} style={{ cursor: 'pointer' }}>
                  Gain/Loss{getSortIndicator('gainLossPercent')}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedHoldings.map((holding) => (
                <tr key={holding.symbol}>
                  <td><strong>{holding.symbol}</strong></td>
                  <td>{holding.name}</td>
                  <td>{holding.quantity}</td>
                  <td>{formatCurrency(holding.avgPrice)}</td>
                  <td>{formatCurrency(holding.currentPrice)}</td>
                  <td>{holding.sector}</td>
                  <td>{formatCurrency(holding.value)}</td>
                  <td className={holding.gainLossPercent >= 0 ? 'positive-value' : 'negative-value'}>
                    {formatPercentage(holding.gainLossPercent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HoldingsTable;