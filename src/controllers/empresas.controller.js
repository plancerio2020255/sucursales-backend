const Empresas = require('../models/empresa.model')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('../services/jwt')

function Login(req, res) {
    var parametros = req.body;
    Empresas.findOne({ email : parametros.email }, (err, empresaEncontrada) => {
        if(err) return res.status(500).send({ mensaje: 'Error en la peticion'});
        if (empresaEncontrada){
            bcrypt.compare(parametros.password, empresaEncontrada.password, 
                (err, verificacionPassword) => {
                    if (verificacionPassword) {
                        if(parametros.obtenerToken == 'true'){
                            return res.status(200)
                                .send({ token: jwt.crearToken(empresaEncontrada) })
                        } else {
                            empresaEncontrada.password = undefined;

                            return res.status(200)
                                .send({empresa: empresaEncontrada })
                        }                       
                    } else {
                        return res.status(500)
                            .send({ mensaje: 'La contrasena no coincide.'})
                    }
                })
        } else {
            return res.status(500)
                .send({ mensaje: 'El usuario, no se ha podido identificar'})
        }
    })
}

module.exports = {
    Login
}
