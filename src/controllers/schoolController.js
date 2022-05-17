const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool();


module.exports.getAll = async (req, res) => {
  try {
   
    let query = `SELECT school.id, school.external_id as school_id, school.name, school.address, school.postal_code, school.email, school.education_level, school.environment, 
    school.school_type, school.country_id, country.name as country, school.location_id, school.admin_2_name, school.admin_3_name, 
    school.admin_4_name, school.admin_1_name, school.giga_id_school FROM public.schools_school school INNER JOIN public.locations_country country ON school.country_id=country.id 
      ORDER BY school.name LIMIT 50;`;

    let result = null;
    try {
      result = await pool.query(query);
    } catch (e) {
      console.log(e);
    }    

    res.status(200).json({success: true, timestamp: new Date(),data: result.rows})
   
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};

module.exports.getBySchoolId = async (req, res) => {
    try {
     
      let query = `SELECT school.id, school.external_id as school_id, school.name, school.address, school.postal_code, school.email, school.education_level, school.environment, 
      school.school_type, school.country_id, country.name as country, school.location_id, school.admin_2_name, school.admin_3_name, 
      school.admin_4_name, school.admin_1_name, school.giga_id_school FROM public.schools_school school INNER JOIN public.locations_country country ON school.country_id=country.id 
        WHERE school.external_id='${req.params.school_id}' ORDER BY school.name;`;
  
      let result = null;
      try {
        result = await pool.query(query);
      } catch (e) {
        console.log(e);
      }    

      res.status(200).json({success: true, timestamp: new Date(),data: result.rows})
     
    } catch (e) {
      res.status(400).json({ success: false, message: e.message });
    }
  };
