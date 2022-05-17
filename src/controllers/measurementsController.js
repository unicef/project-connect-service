const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool();
const { v4: uuidv4 } = require("uuid");

module.exports.getAll = async (req, res) => {
  try {
    let query = `SELECT "Timestamp", "BrowserID", "school_id", "giga_id_school", "Download", "Upload", "Latency"  FROM measurements ORDER BY "Timestamp" desc;`;

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

module.exports.createMeasurements = async (req, res) => {
  const user_id = uuidv4();

  try {
    await pool.query(
      `INSERT INTO measurements("Timestamp", "BrowserID", "school_id", "giga_id_school", "Download", "Upload", "Latency") VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      [
        req.body.Timestamp,
        req.body.BrowserID,
        req.body.school_id,
        req.body.giga_id_school,
        req.body.Download,
        req.body.Upload,
        req.body.Latency,
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


module.exports.deleteMeasurements = async (req, res) => {
  const school_id = req.params.school_id
 

  pool.query('DELETE FROM measurements WHERE school_id = $1', [school_id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Measurement deleted with school_id: "${school_id}"`)
  })
}
