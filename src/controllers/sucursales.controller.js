const mongoose = require('mongoose');
const Sucursales = require('../models/sucursales.models');

const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

function AgregarSucursal(req, res) {
    const parametros = req.body;
    const modeloSucursal = new Sucursales();

    if (parametros.nombreSucursal && parametros.direccion) {
        modeloSucursal.nombreEmpresa = parametros.nombreEmpresa;
        modeloSucursal.tipoEmpresa = parametros.tipoEmpresa;
        modeloSucursal.idEmpresa = req.user.sub;



        modeloSucursal.save((err, sucuralGuardado) => {
            if (err) return res.status(400).send({ mensaje: 'Error en la peticion' });
            if (!sucuralGuardado) return res.status(404).send({ mensaje: 'Error al agregar una sucursal' });
            return res.status(200).send({ Sucursal: sucuralGuardado });
        })

    } else {
        return res.status(404).send({ mensaje: 'Debe enviar los parametros obligatorios' })
    }

}

function EditarSucursales(req, res) {
    const parametros = req.body;
    const idEmpleado = req.params.idEmpleado;

    Sucursales.findOne({ _id: idsucursales, idEmpresa: req.user.sub }, (err, SucursalEncontrada) => {
        if (!empresaEncontrada) {
            return res.status(400).send({ mensaje: "No puedes editar" });
        }
        Sucursales.findByIdAndUpdate(idEmpresa, parametros, { new: true },
            (err, sucursalActualizado) => {
                if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
                if (!sucursalActualizado) return res.status(500).send({ mensaje: 'Error al Editar Sucursales' });

                return res.status(200).send({ sucursal: sucursalActualizado })
            }
        );
    })
}


function eliminarSucursales(req, res) {
    var idSucursal = req.params.idSucursal; //Obtener el valor de la variable en ruta

    Sucursales.findByIdAndDelete(idSucursal, (err, sucursalEliminado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!sucursalEliminado) return res.status(500)
            .send({ mensaje: 'Error al eliminar el sucursal' })
            //Verificaciones

        return res.status(200).send({ sucursal: sucursalEliminado });
    })
}



function BusquedaSucursalPorNombre(req, res) {
    var nomSucursal = req.params.nombreSucursal;

    Sucursales.find({ nombreSucursal: nomSucursal }, (err, SucursalesEncontrados) => {
        if (err) return res.status(500).send({ mensaje: 'Error en  la peticion' });
        if (!SucursalesEncontrados) return res.status(500)
            .send({ mensaje: 'Error al obtener el sucursal' })

        return res.status(200).send({ productos: SucursalesEncontrados })
    })
}


module.exports = {
    AgregarSucursal,
    eliminarSucursales,
    BusquedaSucursalPorNombre,
    AgregarSucursal,
    EditarSucursales
}