var express = require('express');
var router = express.Router();
var Plantas = require('../controllers/plantas')

/* GET home page. */
router.get('/plantas', function(req, res, next) {
  const especieparam = req.query.especie;
  const implantparam = req.query.implant;
  Plantas.plantas(especieparam,implantparam)
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Não foi possível obter a informação das plantas solicitada!!"})
    })
});


router.get('/plantas/:id', (req, res) => {
  Plantas.getPlanta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não foi possível obter a planta solicitada!!"}))
})



router.get('/plantas/freguesias', function(req, res, next) {
  Plantas.freguesias()
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Não foi possível obter a informação das plantas solicitada!!"})
    })
});



router.get('/plantas/especies', function(req, res, next) {
  Plantas.especies()
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Não foi possível obter a informação das plantas solicitada!!"})
    })
});

router.post('/plantas', function(req, res) {
  Plantas.addPlanta(req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção de um pagamento"})
    })
})



router.delete('/plantas/:id', function(req, res) {
  Plantas.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na eleminação da planta"})
    })
})

module.exports = router;

