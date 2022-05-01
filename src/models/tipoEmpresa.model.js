const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoSchema = Schema({
    nombreTipo: String
})

module.exports = mongoose.model('Tipo', TipoSchema)