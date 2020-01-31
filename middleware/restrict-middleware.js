const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if(error){
        res.status(401).json({message: "Invalid Token"})
      } else {
        req.user = decodedToken
        next();
      }
    })
  } else {
    res.status(401).json({message: "You shall not pass!"})
  }
};