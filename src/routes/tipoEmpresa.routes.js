const express = require('express')
const controladorAdmin = require('../controllers/admin.controller')
const md_autenticacion = require('../middlewares/autenticacion');
const md_role = require('../middlewares/roles');
const api = express.Router()

api.post('/agregarTipoEmpresa', [md_autenticacion.Auth, md_role.verAdmin], controladorAdmin.crearTipoEmpresa)
api.put('/editarTipoEmpresa', [md_autenticacion.Auth, md_role.verAdmin], controladorAdmin.editarTipoEmpresa)
api.delete('/eliminarTipoEmpresa', [md_autenticacion.Auth, md_role.verAdmin], controladorAdmin.deleteTipoEmpresa)

module.exports = api
