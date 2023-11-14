const server = require('express')()

server.get('',function(req,res){
    res.send('hi lol')
});