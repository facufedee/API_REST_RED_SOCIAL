//importar dependencias
const {connection} = require("./database/connection");
const express = require("express");
const cors = require("cors");
//punto de entrada a nuestra aplicacion - Aca carga todo

//MENSAJE DE BIENVENIDA 
console.log("Bienvenido a mi red social")
//conexion a la base de datos
connection();
//crear servidor node
const app = express();
const puerto = 3900;
//configurar cors para que todas las peticiones las haga correctamente
app.use(cors());
//convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// cargar conf rutas
const UserRoutes = require("./routes/user");
const PublicationRoutes = require("./routes/publication");
const FollowRoutes = require("./routes/follow");

app.use("/api/user", UserRoutes);
app.use("/api/publication", PublicationRoutes);
app.use("/api/follow", FollowRoutes);

//rutas de pruebas

app.get("/ruta-prueba", (req, res) =>{
    return res.status(200).json({
        "id": 1,
        "nombre":"Facundo",
        "web": "facuflores.com"
    });
})
//poner servidor a escuchar peticiones http
app.listen(puerto, ()=>{
    console.log("Servidor de node corriendo en el puerto: ", puerto)
})