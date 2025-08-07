const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

/**
 * @swagger
 * /api/portfolio/holdings:
 *   get:
 *     summary: Get all portfolio holdings
 *     description: Returns a list of all stocks in the portfolio with details
 *     responses:
 *       200:
 *         description: A list of portfolio holdings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   symbol:
 *                     type: string
 *                   name:
 *                     type: string
 *                   quantity:
 *                     type: number
 *                   avgPrice:
 *                     type: number
 *                   currentPrice:
 *                     type: number
 *                   sector:
 *                     type: string
 *                   marketCap:
 *                     type: string
 *                   value:
 *                     type: number
 *                   gainLoss:
 *                     type: number
 *                   gainLossPercent:
 *                     type: number
 */
router.get('/holdings', portfolioController.getHoldings);

/**
 * @swagger
 * /api/portfolio/allocation:
 *   get:
 *     summary: Get portfolio allocation
 *     description: Returns portfolio allocation by sector and market cap
 *     responses:
 *       200:
 *         description: Portfolio allocation data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bySector:
 *                   type: object
 *                   additionalProperties:
 *                     type: object
 *                     properties:
 *                       value:
 *                         type: number
 *                       percentage:
 *                         type: number
 *                 byMarketCap:
 *                   type: object
 *                   additionalProperties:
 *                     type: object
 *                     properties:
 *                       value:
 *                         type: number
 *                       percentage:
 *                         type: number
 */
router.get('/allocation', portfolioController.getAllocation);

/**
 * @swagger
 * /api/portfolio/performance:
 *   get:
 *     summary: Get portfolio performance
 *     description: Returns time-series data comparing portfolio to benchmarks
 *     responses:
 *       200:
 *         description: Portfolio performance data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timeline:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       date:
 *                         type: string
 *                       portfolio:
 *                         type: number
 *                       nifty50:
 *                         type: number
 *                       gold:
 *                         type: number
 *                 returns:
 *                   type: object
 *                   properties:
 *                     portfolio:
 *                       type: object
 *                     nifty50:
 *                       type: object
 *                     gold:
 *                       type: object
 */
router.get('/performance', portfolioController.getPerformance);

/**
 * @swagger
 * /api/portfolio/summary:
 *   get:
 *     summary: Get portfolio summary
 *     description: Returns key portfolio metrics and insights
 *     responses:
 *       200:
 *         description: Portfolio summary data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalValue:
 *                   type: number
 *                 totalInvested:
 *                   type: number
 *                 totalGainLoss:
 *                   type: number
 *                 totalGainLossPercent:
 *                   type: number
 *                 topPerformer:
 *                   type: object
 *                   properties:
 *                     symbol:
 *                       type: string
 *                     name:
 *                       type: string
 *                     gainPercent:
 *                       type: number
 *                 worstPerformer:
 *                   type: object
 *                   properties:
 *                     symbol:
 *                       type: string
 *                     name:
 *                       type: string
 *                     gainPercent:
 *                       type: number
 *                 diversificationScore:
 *                   type: number
 *                 riskLevel:
 *                   type: string
 */
router.get('/summary', portfolioController.getSummary);

module.exports = router;