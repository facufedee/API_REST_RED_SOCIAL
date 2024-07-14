


//Acciones de pruebas
const prueba_follow = (req, res) =>{
    return res.status(200).json({
        mensaje: "Mensaje enviado desde: Controllers/follow.js"
    })
}


//exportar acciones
module.exports = {
    prueba_follow
}