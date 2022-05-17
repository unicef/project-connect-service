const express =  require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const {
    getAll,
    getBySchoolId
} = require('../controllers/schoolController');

/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - id
 *         - school_id
 *         - name
 *         - address
 *         - postal_code
 *         - email
 *         - education_level
 *         - environment
 *         - school_type
 *         - country_id
 *         - country
 *         - location_id
 *         - admin_1_name
 *         - admin_2_name
 *         - admin_3_name
 *         - admin_4_name
 *       properties:
 *         id:
 *           type: int
 *           description: The unique id of the school
 *         school_id:
 *           type: string
 *           description: The school_id provided by government
 *         name:
 *           type: string
 *           description: school name
 *         address:
 *           type: string
 *           description: school address
 *         postal_code:
 *           type: string
 *           description: school postal_code
 *         email:
 *           type: string
 *           description: school email
 *         education_level:
 *           type: string
 *           description: school education_level
 *         environment:
 *           type: string
 *           description: school environment
 *         school_type:
 *           type: string
 *           description: school type
 *         country_id:
 *           type: int
 *           description: country id
 *         country:
 *           type: string
 *           description: country name
 *         location_id:
 *           type: int
 *           description: school location_id
 *         admin_2_name:
 *           type: string
 *           description: admin_2_name
 *         admin_3_name:
 *           type: string
 *           description: admin_3_name
 *         admin_4_name:
 *           type: string
 *           description: admin_4_name
 *         admin_1_name:
 *           type: string
 *           description: admin_4_name
 *         giga_id_school:
 *           type: string
 *           description: A unique giga_id_school
 *       example:
 *         id: 144
 *         code: BR
 *         name: C.B.T.A. NUM. 36 EMILIANO ZAPA
 *         country_id: 146,
 *         country: Mexico
 *         location_id:
 *         address: 
 *         email: 
 *         postal_code: 
 *         education_level: 
 *         environment:  
 *         admin_2_name: 
 *         admin_3_name: 
 *         admin_4_name: 
 *         admin_1_name: 
 *         giga_id_school: 7b995921-6531-4eaf-a399-57491f5de640 *         
 */


/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: Returns the list of 50 schools data
 *     tags: [School]
 *     responses:
 *       200:
 *         description: The list of the schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 */
 router.get('/', auth, getAll);



/**
 * @swagger
 * /api/v1/schools/{school_id}:
 *   get:
 *     summary: Get a school by school_id
 *     tags: [School]
 *     parameters:
 *       - in: path
 *         name: school_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The school id
 *     responses:
 *       200:
 *         description: The school information filtered by school_id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       404:
 *         description: The country was not found
 */

 router.get('/:school_id', auth, getBySchoolId);





module.exports = router;