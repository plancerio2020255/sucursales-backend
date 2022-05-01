const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmpresaSchema = Schema({
  nombre: String,
  usuario: String,
  email: String,
  password: String,
  rol: String,
  tipoEmpresa: String
})

module.exports = mongoose.model('Empresas', EmpresaSchema)
