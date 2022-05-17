const express =  require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const {
    getAll,
    createDailycheckappSchool,
    deleteDailyCheckappSchool
} = require('../controllers/dailycheckapp_schoolController');

/**
 * @swagger
 * components:
 *   schemas:
 *     DailyCheckAppSchool:
 *       type: object
 *       required:
 *         - giga_id_school
 *         - mac_address
 *         - os
 *         - app_version
 *       properties:
 *         giga_id_school:
 *           type: string
 *           description: A unique giga id
 *         mac_address:
 *           type: string
 *           description: MAC address 
 *         os:
 *           type: string
 *           description: Operating system
 *         app_version:
 *           type: string
 *           description: Daily check app version
 *         created:
 *           type: date
 *           descripton: Created date
 *       example:
 *         giga_id_school: fd75dc75-1f13-4b66-b0ab-91ee8f464eac
 *         mac_address: 2C:54:91:88:C9:E3
 *         os: Windows
 *         app_version: 1.0.0  
 *         created: 2022-01-01   
 */


/**
 * @swagger
 * /api/v1/dailycheckapp_schools:
 *   get:
 *     summary: Returns the list of registered schools on the Daily Check App database
 *     tags: [Daily Check App Schools]
 *     responses:
 *       200:
 *         description: The list of schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DailyCheckAppSchool'
 */
 router.get('/',auth, getAll);

/**
 * @swagger
 * /api/v1/dailycheckapp_schools:
 *   post:
 *     summary: Register a school in to the Daily Check App database
 *     tags: [Daily Check App Schools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyCheckAppSchool'
 *     responses:
 *       200:
 *         description: The school was successfully added to PCDC database
 *       500:
 *         description: Some server error
 */
 router.post('/', auth, createDailycheckappSchool);

 /**
 * @swagger
 * /api/v1/dailycheckapp_schools/{user_id}:
 *   delete:
 *     summary: Remove the school by user_id
 *     tags: [Daily Check App Schools]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The school user id
 * 
 *     responses:
 *       200:
 *         description: The school was deleted
 *       404:
 *         description: The school was not found
 */
router.delete('/:user_id', auth, deleteDailyCheckappSchool);



module.exports = router;