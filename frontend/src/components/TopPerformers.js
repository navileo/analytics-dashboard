import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

/**
 * TopPerformers component to display top and worst performing stocks
 * @param {Object} props - Component props
 * @param {Object} props.topPerformer - Top performing stock
 * @param {Object} props.worstPerformer - Worst performing stock
 * @param {number} props.diversificationScore - Portfolio diversification score
 * @param {string} props.riskLevel - Portfolio risk level
 */
const TopPerformers = ({ topPerformer, worstPerformer, diversificationScore, riskLevel }) => {
  // Get risk level class for styling
  const getRiskLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'risk-low';
      case 'moderate':
        return 'risk-moderate';
      case 'high':
        return 'risk-high';
      default:
        return '';
    }
  };

  return (
    <Card className="chart-container">
      <Card.Body>
        <Card.Title className="mb-4">Portfolio Insights</Card.Title>
        
        {/* Top Performer */}
        <div className="mb-4">
          <h6 className="text-success">Top Performer</h6>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{topPerformer.symbol}</h5>
                  <p className="text-muted mb-0">{topPerformer.name}</p>
                </div>
                <div className="text-end">
                  <h5 className="positive-value">+{topPerformer.gainPercent.toFixed(2)}%</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        
        {/* Worst Performer */}
        <div className="mb-4">
          <h6 className="text-danger">Worst Performer</h6>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{worstPerformer.symbol}</h5>
                  <p className="text-muted mb-0">{worstPerformer.name}</p>
                </div>
                <div className="text-end">
                  <h5 className="negative-value">{worstPerformer.gainPercent.toFixed(2)}%</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        
        {/* Diversification Score */}
        <Row className="mb-3">
          <Col xs={6}>
            <h6>Diversification Score</h6>
            <div className="score-container">
              <div 
                className="score-circle" 
                style={{ '--percentage': `${diversificationScore}%` }}
              >
                <div className="score-inner">{diversificationScore}</div>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <h6>Risk Level</h6>
            <div className="d-flex align-items-center justify-content-center h-100">
              <span className={`risk-indicator ${getRiskLevelClass(riskLevel)}`}>
                {riskLevel}
              </span>
            </div>
          </Col>
        </Row>
        
        {/* Portfolio Insights */}
        <div>
          <h6>Key Insights</h6>
          <ul className="small">
            {diversificationScore >= 80 && (
              <li>Your portfolio is well-diversified across sectors and market caps.</li>
            )}
            {diversificationScore < 80 && diversificationScore >= 60 && (
              <li>Your portfolio has moderate diversification. Consider adding more variety.</li>
            )}
            {diversificationScore < 60 && (
              <li>Your portfolio lacks diversification. Consider spreading investments across more sectors.</li>
            )}
            {topPerformer.gainPercent > 25 && (
              <li>Your top performer is significantly outperforming the market.</li>
            )}
            {worstPerformer.gainPercent < -15 && (
              <li>Your worst performer is significantly underperforming. Consider reviewing this investment.</li>
            )}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TopPerformers;