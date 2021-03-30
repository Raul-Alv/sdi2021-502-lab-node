module.exports = function(app, swig) {
    app.get('/autores/agregar', function (req, res){
        let respuesta = swig.renderFile('views/autores-agregar.html',{});
        res.send(respuesta);
    });

    app.post('/autores/agregar', function (req, res){
        let respuesta = "";
        if(req.body.nombre != null)
            respuesta += 'Nombre del autor: ' + req.body.nombre + "<br>";
        else
            respuesta += "Nombre del autor no enviado en la peticion<br>";
        if(req.body.grupo != null)
            respuesta += " Grupo: " + req.body.grupo + "<br>";
        else
            respuesta += " Grupo no enviado en la peticion<br>";
        if(req.body.rol != null)
            respuesta += " rol: " + req.body.rol;
        else
            respuesta += " Rol no enviado en la peticion<br>";
        res.send(respuesta);
    });

    app.get('/autores', function (req, res){
        let autores = [ {
            "nombre" : "NF",
            "grupo" : "",
            "rol" : "Cantante"
        }, {
            "nombre" : "Adam Levigne",
            "grupo" : "Maroon V",
            "rol" : "Cantante"
        }, {
            "nombre" : "John Deacon",
            "grupo" : "Queen",
            "rol" : "Bajista"
        } ];
        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Tienda de canciones',
            autores : autores
        });

        res.send(respuesta);
    });

    app.get('/autores/*', function (req, res){
        res.redirect('/autores');
    });
}