const express =  require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const {
    getAll,
    createMeasurements,
    deleteMeasurements
} = require('../controllers/measurementsController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Measurements:
 *       type: object
 *       required:
 *         - Timestamp
 *         - BrowserID
 *         - school_id
 *         - giga_id_school
 *         - Download
 *         - Upload
 *         - Latency
 *       properties:
 *         Timestamp:
 *           type: date
 *           description: A Timestamp for the data is created
 *         BrowserID:
 *           type: string
 *           description: Browser id (this field might be removed) 
 *         school_id:
 *           type: string
 *           description: A school id
 *         giga_id_school:
 *           type: string
 *           description: A GIGA id
 *         Download:
 *           type: double
 *           descripton: A Download speed we get from the Daily Check App
 *         Upload:
 *           type: double
 *           descripton: A Upload speed we get from the Daily Check App
 *         Latency:
 *           type: double
 *           descripton: A Latency information we get from the Daily Check App
 *       example:
 *         Timestamp: 2022-01-01 
 *         BrowserID: 452435678909657
 *         school_id: 99238348054
 *         giga_id_school: fd75dc75-1f13-4b66-b0ab-91ee8f464eac
 *         Download: 10458.90934
 *         Upload: 89.94
 *         Latency: 5.5  
 */

/**
 * @swagger
 * /api/v1/measurements:
 *   get:
 *     summary: Returns the list of registered measurement on the database
 *     tags: [Measurements]
 *     responses:
 *       200:
 *         description: The list of measurements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Measurements'
 */
 router.get('/',auth, getAll);

/**
 * @swagger
 * /api/v1/measurements:
 *   post:
 *     summary: Register a measurement information to the database
 *     tags: [Measurements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Measurements'
 *     responses:
 *       200:
 *         description: The measurement was successfully added to the database
 *       500:
 *         description: Some server error
 */
 router.post('/', auth, createMeasurements);

 /**
 * @swagger
 * /api/v1/measurements/{school_id}:
 *   delete:
 *     summary: Remove the measurements by school_id
 *     tags: [Measurements]
 *     parameters:
 *       - in: path
 *         name: school_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The school id
 * 
 *     responses:
 *       200:
 *         description: The measurement was deleted
 *       404:
 *         description: The measurment was not found
 */
router.delete('/:school_id', auth, deleteMeasurements);



module.exports = router;