const e = require("express");
const { Pool } = require("pg");

//const redis = require("redis");

require("dotenv").config();

//const REDIS_PORT = process.env.REDIS_PORT || 6379
//const client = redis.createClient(REDIS_PORT);


const pool = new Pool();

module.exports.getAll = async (req, res) => {
  try {
    let query = `SELECT id, code, name, flag FROM locations_country order by name;`;

    let result = null;
    try {
      result = await pool.query(query);
     // client.setex('country',3600,result);

    } catch (e) {
      console.log(e);
    }
    
    const data = result.rows.map(country => {
        return {
            id: country.id,
            code: country.code,
            name: country.name,            
             flag :`https://sauniconnectweb.blob.core.windows.net/uniconnectweb/${country.flag}` 
        }        
    });
    
    res.status(200).json({success: true, timestamp: new Date(),data})
   
  } catch (e) {
    res.status(400).json({ success: false, message: err.message });
  }
};


module.exports.getById = async (req, res) => {
    try {
      let query = `SELECT id, code, name,flag FROM locations_country WHERE id=${req.params.id} order by name;`;
  
      let result = null;
      try {
        result = await pool.query(query);
      } catch (e) {
        console.log(e);
      }
      const data = result.rows.map(country => {
        return {
            id: country.id,
            code: country.code,
            name: country.name,            
            flag :`https://sauniconnectweb.blob.core.windows.net/uniconnectweb/${country.flag}` 
        }        
    });
      
      res.status(200).json({success: true, timestamp: new Date(), data})
     
    } catch (e) {
      res.status(400).json({ success: false, message: err.message });
    }
  };
