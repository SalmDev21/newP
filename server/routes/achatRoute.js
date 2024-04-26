const express = require("express");
const connection = require("../database");
const achatController = require("../controllers/achatsController");

const router = express.Router();

router.get("/allA", achatController.getAllachats );
router.get("/:id", achatController.getByid );
router.post("/createA", achatController.createachat);
router.delete("/deleteA/:id", achatController.deleteachat);
router.put("/updateA/:id", achatController.updateachat);




module.exports = router;



