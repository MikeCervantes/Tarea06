var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/tarea06');

var Libro = mongoose.model('Libro2',schema,'libro2');

var libro = new Libro({
    title: 'Titulo Prueba',
    author: 'Autor Prueba',
    body: 'Descripción Prueba'
});

libro.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});

Libro.find({},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta General");
    console.log(docs);
    process.exit(0);
});

Libro.find({title: "Titulo Prueba"}, function (error, docs) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta Específica");
    console.log(docs);
});

Libro.update({title:"Titulo Prueba"},{$set: {author:"Autor Prueba 2"}},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
    process.exit(0);
});

Libro.findByIdAndRemove({_id:"5d1997aa7eab423e3cbafe67"},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});