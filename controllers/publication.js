


//Acciones de pruebas
const prueba_publication = (req, res) =>{
    return res.status(200).json({
        mensaje: "Mensaje enviado desde: Controllers/publication.js"
    })
}


//exportar acciones
module.exports = {
    prueba_publication
}