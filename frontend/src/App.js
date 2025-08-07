import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './App.css';

// Import components
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import AllocationCharts from './components/AllocationCharts';
import HoldingsTable from './components/HoldingsTable';
import PerformanceChart from './components/PerformanceChart';
import TopPerformers from './components/TopPerformers';

// Import API services
import { 
  getHoldings, 
  getAllocation, 
  getPerformance, 
  getSummary 
} from './services/portfolioService';

function App() {
  // State for data
  const [holdings, setHoldings] = useState([]);
  const [allocation, setAllocation] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [summary, setSummary] = useState(null);
  
  // State for loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data on component mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [holdingsData, allocationData, performanceData, summaryData] = await Promise.all([
          getHoldings(),
          getAllocation(),
          getPerformance(),
          getSummary()
        ]);
        
        // Update state with fetched data
        setHoldings(holdingsData);
        setAllocation(allocationData);
        setPerformance(performanceData);
        setSummary(summaryData);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError('Failed to load portfolio data. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchAllData();
  }, []);

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading portfolio data...</p>
      </div>
    );
  }

  // Show error message if data fetching failed
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <div className="App">
      <Header />
      
      <Container fluid className="dashboard-container">
        {/* Overview Cards */}
        {summary && (
          <OverviewCards summary={summary} />
        )}
        
        <Row className="mt-4">
          {/* Asset Allocation Charts */}
          <Col lg={6} md={12}>
            {allocation && (
              <AllocationCharts allocation={allocation} />
            )}
          </Col>
          
          {/* Performance Chart */}
          <Col lg={6} md={12}>
            {performance && (
              <PerformanceChart performance={performance} />
            )}
          </Col>
        </Row>
        
        <Row className="mt-4">
          {/* Holdings Table */}
          <Col lg={8} md={12}>
            {holdings.length > 0 && (
              <HoldingsTable holdings={holdings} />
            )}
          </Col>
          
          {/* Top Performers */}
          <Col lg={4} md={12}>
            {summary && (
              <TopPerformers 
                topPerformer={summary.topPerformer} 
                worstPerformer={summary.worstPerformer}
                diversificationScore={summary.diversificationScore}
                riskLevel={summary.riskLevel}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;