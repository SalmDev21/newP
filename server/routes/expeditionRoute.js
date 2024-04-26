const express = require("express");
const connection = require("../database");
const expeditionController = require("../controllers/expeditionController");

const router = express.Router();

router.get("/all", expeditionController.getAllexpedition );
router.get("/:id", expeditionController.getByid );
router.post("/create", expeditionController.createexpedition);
router.delete("/delete/:id", expeditionController.deleteexpedition);
router.put("/update/:id", expeditionController.updateexpedition);
router.put("/updateSig/:id", expeditionController.updateSig);




module.exports = router;



