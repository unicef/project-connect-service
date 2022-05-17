const express = require('express');

const router = express.Router();

const countries = require('./country');
const schools = require('./school');
const dailycheckApp = require('./dailycheckapp_school')
const measurements = require('./measurements')



router.use('/countries', countries);
router.use('/schools', schools);
router.use('/dailycheckapp_schools', dailycheckApp)
router.use('/measurements', measurements)

module.exports = router;