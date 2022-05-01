const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductosSucursalesSchema = Schema({
  nombreProductoSucursal: String,
  stockSucursal: String,
  cantidadVendidaSucursal: String,
  idSucursal: { type: Schema.Types.ObjectId, ref: 'Sucursales' }
})

module.exports = mongoose.model('ProductosSucursales', ProductosSucursalesSchema)
