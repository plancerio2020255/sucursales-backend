const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var MunicipiosSchema = Schema({
    nombreMunicipio: String
})

module.exports = mongoose.model('Municipios', MunicipiosSchema)