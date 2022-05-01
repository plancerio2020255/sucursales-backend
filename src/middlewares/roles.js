exports.verAdmin = function(req, res, next) {
    if(req.user.rol !== "SuperAdmin") return res.status(403).send({mensaje: "Solo puede acceder un usuario con rol admin"})
    
    next();
}

exports.verEmpresa = function(req, res, next) {
    if(req.user.rol !== "Empresa") return res.status(403).send({mensaje: "Solo puede acceder la Empresa"})
    
    next();
}