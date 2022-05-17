const jwt = require("jsonwebtoken");
require("dotenv").config();





const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
   
    if (!token) {
      return res.status(401).send("A token is required for authentication");      
    }
    if(token == process.env.ACCESS_TOKEN_SECRET){
        console.log("Authentication success!")
      next();
    } else {
        return res.status(401).send("Invalid Token");
    }

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //   console.log(decoded, err);
    //   if (err) return res.sendStatus(403);
    //   req.user = decoded;
    //   next();
    // });


  } catch (e) {
    res.send(e).status(500);
  }
};



module.exports = auth;
