var express = require('express');
var router = express.Router();
var plant = require('../config/plant')
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(plant.apiAccessPoint+"/plantas")
    .then(response => {
      res.render('index', { plantas: response.data, d: data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});


// router.get('/movimentos', function(req, res) {
//   var date = new Date().toISOString().substring(0,19)
//   axios.get(mov.apiAccessPoint+"/movimentos")
//     .then(response => {
//       res.render('movimentos', { movimentos: response.data.sort((a, b) => new Date(a.Data) - new Date(b.Data)), d: date});
//     })
//     .catch(err => {
//       res.render('error', {error: err})
//     })
// });

// router.get('/pagamentos', function(req, res) {
//   var data = new Date().toISOString().substring(0,19)
//   axios.get(mov.apiAccessPoint+"/pagamentos")
//     .then(response => {
//       res.render('pagamentos', { pagamentos: response.data, d: data});
//     })
//     .catch(err => {
//       res.render('error', {error: err})
//     })
// });

// router.post('/pagamentos/add', function(req, res, next) {
//   var data = new Date().toISOString().substring(0, 16)
//   axios.post(mov.apiAccessPoint+"/pagamentos")
//     .then(response => {
//       res.render('pagamentosAdd', { pagamento: response.data, d: data});
//     })
//     .catch(err => {
//       res.render('error', {error: err})
//     })
// });

// router.get('/movimentos/add', function(req, res, next) {
//   var data = new Date().toISOString().substring(0, 16)
//   res.render('movimentosAdd', { d: data});
// });

// router.post('/movimentos/add', function(req, res, next) {
//   // var date = new Date().toISOString().substring(0, 16)
//   axios.post(mov.apiAccessPoint+"/movimentos", req.body)
//         .then(response => {
//           console.log(response.data)
//           res.render('confirmMov', { m: response.data});
//         })
//         .catch(err => {
//           res.render('error', {error: err})
//         })
// });

module.exports = router;
