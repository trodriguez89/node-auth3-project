const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../middleware/restrict-middleware");

router.get("/", restricted, (req, res) => {
    const body = req.user.department;
    Users.find(body)
    .then(users => {
        res.json(users)
    })
    .catch(error => {
        res.status(500).json({message: "Error retrieving users."})
    })
});

module.exports = router;