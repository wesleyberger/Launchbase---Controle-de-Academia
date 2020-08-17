const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const routes = require("./routes")

// template engine
server.set("view engine", "njk")
nunjucks.configure("pages", {
    express: server,
    autoescape: false,
    noCache: true
})  
// Middleware funcionar req > body (sempre antes do // routes)
server.use(express.urlencoded({ extended: true }))
// routes
server.use(routes)
// styles
server.use(express.static('public'))
server.use(express.static('public/styles'))
// configurando porta 5000
server.listen(5000, function(){ 
    console.log("Server is RUNNING!!! !:^:!")
})