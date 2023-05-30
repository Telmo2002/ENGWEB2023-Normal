const mongoose = require('mongoose')

var plantasSchema = new mongoose.Schema({
    
    _id: Number,
    NúmeroRegisto: Number,
    CódigoRua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Espécie: String,
    NomeCientífico: String,
    Origem: String,
    DataPlantação: Date,
    Estado: String,
    Caldeira: Date,
    Tutor: String,
    Implantação: String,
    Gestor: String,
    DataActualização: Date,
    NúmeroIntervenções: Number

})

module.exports = mongoose.model('plantas', plantasSchema)