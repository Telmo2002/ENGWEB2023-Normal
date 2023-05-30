var Plantas = require('../models/plantas')


// Plants
module.exports.plantas = (resultado1,resultado2) => {
    if (resultado1 === undefined && resultado2 === undefined) {
        return Plantas
        .find({})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (resultado1 === undefined){
        return Plantas
        .find({Implantação:resultado2})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (resultado2 === undefined) {
        return Plantas
        .find({Espécie:resultado1},)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
    }
}

module.exports.freguesias = () => {
    freguesias = []
    return Plantas.find({},'Freguesia -_id')
                .sort({Freguesia:1})
                .then(result => {
                        result.forEach(p => {
                            freguesias.push(p.Freguesia);
                        })
                        return freguesias
                        })
        .catch(erro => {
            return erro
        })
}

module.exports.cidadesNomes = () => {
    names = []
    return Cidades.find({},'nome -_id')
                .sort({nome:1})
                .then(result => {
                        result.forEach(c => {
                            names.push(c.nome);
                        })
                        return names
                        })
        .catch(erro => {
            return erro
        })
}

module.exports.especies = () => {
    especies = []
    return Plantas.find({},'Espécie')
                .then(result => {
                        result.forEach(p => {
                            freguesias.push(p.Espécie);
                        })
                        return especies
                        })
        .catch(erro => {
            return erro
        })
}


module.exports.addPlantas = p => {
    return Plantas.create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getPlanta = id => {
    return Plantas.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Plantas.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


