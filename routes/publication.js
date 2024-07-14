const express = require("express");
const router = express.Router();
const publicationController = require("../controllers/publication");


//definir rutas 
router.get("/prueba-publicacion", publicationController.prueba_publication);


//exportar router
module.exports = router;