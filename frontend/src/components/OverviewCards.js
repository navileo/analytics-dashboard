import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

/**
 * OverviewCards component to display key portfolio metrics
 * @param {Object} props - Component props
 * @param {Object} props.summary - Portfolio summary data
 */
const OverviewCards = ({ summary }) => {
  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format percentage values
  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  return (
    <Row className="mb-4">
      {/* Total Portfolio Value */}
      <Col lg={3} md={6} sm={6} className="mb-3">
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title className="text-muted fs-6">Portfolio Value</Card.Title>
            <Card.Text className="fs-4 fw-bold">
              {formatCurrency(summary.totalValue)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Total Invested Amount */}
      <Col lg={3} md={6} sm={6} className="mb-3">
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title className="text-muted fs-6">Total Invested</Card.Title>
            <Card.Text className="fs-4 fw-bold">
              {formatCurrency(summary.totalInvested)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Total Gain/Loss */}
      <Col lg={3} md={6} sm={6} className="mb-3">
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title className="text-muted fs-6">Total Gain/Loss</Card.Title>
            <Card.Text className={`fs-4 fw-bold ${summary.totalGainLoss >= 0 ? 'positive-value' : 'negative-value'}`}>
              {formatCurrency(summary.totalGainLoss)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Total Gain/Loss Percentage */}
      <Col lg={3} md={6} sm={6} className="mb-3">
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title className="text-muted fs-6">Return</Card.Title>
            <Card.Text className={`fs-4 fw-bold ${summary.totalGainLossPercent >= 0 ? 'positive-value' : 'negative-value'}`}>
              {formatPercentage(summary.totalGainLossPercent)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default OverviewCards;