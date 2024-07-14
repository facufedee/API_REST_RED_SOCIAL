//definimos mi modelo de usuarios, es el esquema que va a tener mi propio objeto

const {Schema, model} = require("mongoose");

const userSchema = Schema({
    name: {
        type: String,
        require: true
    },
    surname: String,
    nick: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        default: "role_user"
    },
    imagen: {
        type: String,
        default: "default.png"
    },
    create_at: {
        type: Date,
        default: Date.now
    }

});

//tengo que exportar un model, no el objeto en concreto
module.exports = model("User", userSchema, "users");