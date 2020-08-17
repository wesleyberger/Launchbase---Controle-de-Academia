const express = require('express');
const routes = express.Router()

// Rota Raiz
routes.get('/', function(req, res){
  return res.redirect("/instructors")
})
// Rota Instrutores
routes.get('/instructors', function(req, res){
  return res.render("instructors/index")
})
routes.get('/instructors/create', function(req, res){
  return res.render("instructors/create")
})
routes.post("/instructors", function(req, res){
  return res.send(req.body)
})
// Rota Membros
routes.get('/members', function(req, res){
  return res.send("members")
})

module.exports = routes