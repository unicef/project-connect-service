const express =  require('express');
const router = express.Router();
const auth = require("../middleware/auth");

const {
    getAll, getById, getByCode,
} = require('../controllers/countryController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       required:
 *         - id
 *         - code
 *         - name
 *         - flag
 *       properties:
 *         id:
 *           type: int
 *           description: The unique id of the country
 *         code:
 *           type: string
 *           description: country code
 *         name:
 *           type: string
 *           description: country name
 *         flag:
 *           type: string
 *           description: country flag url
 *       example:
 *         id: 144
 *         code: BR
 *         name: Brazil
 *         flag: https://sauniconnectweb.blob.core.windows.net/uniconnectweb/images/fc029acd-297a-4fdc-bd2f-05d586f95106.png 
 */




/**
 * @swagger
 * /api/v1/countries:
 *   get:
 *     summary: Returns the list of all the countries
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: The list of the countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 */
router.get('/', auth, getAll);


/**
 * @swagger
 * /api/v1/countries/{id}:
 *   get:
 *     summary: Get a country by id
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The country id
 *     responses:
 *       200:
 *         description: The country information filtered by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: The country was not found
 */

 router.get('/:id',auth, getById);





module.exports = router;