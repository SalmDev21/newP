const express = require("express");
const connection = require("../database");
const categorieController = require("../controllers/categorieController");

const router = express.Router();

router.get("/all", categorieController.getAllCategories );
router.get("/:id", categorieController.getByid );
router.post("/create", categorieController.createCategory);
router.delete("/delete/:id", categorieController.deletecategory);
router.put("/update/:id", categorieController.updateCategory);



module.exports = router;



