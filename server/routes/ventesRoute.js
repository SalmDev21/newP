const express = require("express");
const connection = require("../database");
const venteController = require("../controllers/ventesController");

const router = express.Router();

router.get("/allV", venteController.getAllVentes );
router.get("/:id", venteController.getByid );
router.post("/createV", venteController.createVentes);
router.delete("/deleteV/:id", venteController.deleteVentes);
router.put("/updateV/:id", venteController.updateVentes);



module.exports = router;



