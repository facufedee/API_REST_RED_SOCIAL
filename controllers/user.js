//importar dependencias y modulos 
const User = require("../models/user");


//Acciones de pruebas
const prueba_user = (req, res) =>{
    return res.status(200).json({
        mensaje: "Mensaje enviado desde: Controllers/user.js"
    })
}


const register = (req, res) =>{
    //recoger datos de la peticion
    let params = req.body; 

    //comprobar que llegaron bien los datos (+validacion )


    //control de usuarios duplicados


    //cifrar la contraseña

    //guardar usuario en la base de datos 

    //devolver resultado
    return res.status(200).json({
        mensaje: "OKI EL REGISTRO",
        params
    })

} 






//exportar acciones
module.exports = {
    prueba_user,
    register
}