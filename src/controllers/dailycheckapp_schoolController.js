const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool();
const { v4: uuidv4 } = require("uuid");

module.exports.getAll = async (req, res) => {
  try {
    let query = `SELECT * FROM dailycheckapp_school ORDER BY created desc;`;

    let result = null;
    try {
      result = await pool.query(query);
    } catch (e) {
      console.log(e);
    }

    res
      .status(200)
      .json({ success: true, timestamp: new Date(), data: result.rows });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};

module.exports.createDailycheckappSchool = async (req, res) => {
  const user_id = uuidv4();

  try {
    await pool.query(
      `INSERT INTO dailycheckapp_school(user_id, giga_id_school, mac_address, os, app_version, created) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        user_id,
        req.body.giga_id_school,
        req.body.mac_address,
        req.body.os,
        req.body.app_version,
        req.body.created,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        res
          .status(201)
          .send({ success: true, timestamp: new Date(), data: { user_id } });
      }
    );
  } catch (e) {
    res.send(e).status(500);
  }
};


module.exports.deleteDailyCheckappSchool = async (req, res) => {
  const userId = req.params.user_id
 

  pool.query('DELETE FROM dailycheckapp_school WHERE user_id = $1', [userId], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`School deleted with user_id: "${userId}"`)
  })
}
