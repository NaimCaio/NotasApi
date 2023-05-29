

const express = require('express');
const usersService= require('./service/usersService');
const notasService= require('./service/notasService');

const app= express();

app.use(express.json());
// app.use('/', require('./route/userRoute'));
// app.use('/', require('./route/notaRoute'));


app.get('/users',async function (req, res){
    const users = await usersService.getUsers();
    res.json(users);
});
app.get('/users/:id',async function (req, res){
    
});

app.post('/users',async function (req, res){
    try {
        const userCriado = await usersService.createNewUser(req.body.usuario, req.body.senha);
        res.json(userCriado);
    } catch (error) {
        res.status(500).send(error.toString())
    }
    
    
})

app.put('/users/',async function (req, res){
    try {
        const usuarioAtualizxado= await usersService.updateUser(req.body.usuario, req.body.senha);
        res.json(usuarioAtualizxado);
    } catch (error) {
        res.status(500).send(error)
    }
})
app.delete('/users/:id',async function (req, res){
    
})





app.get('/notas',async function (req, res){

   const notas = await notasService.getNotas()
   res.json(notas);
});
app.get('/notasUsuario/:id',async function (req, res){
    const notaCriada = await notasService.getUsuarioNotas(req.params.id);
    res.json(notaCriada);
});

app.post('/criarNota',async function (req, res){
    try {
        const notaCriada = await notasService.createNota(req.body.nota, req.body.usuario);
        res.json(notaCriada);
    } catch (error) {
        res.status(500).send(error.toString())
    }
    
    
})

app.put('/atualizaNota',async function (req, res){
    try {
        const usuarioAtualizxado= await notasService.updateNota(req.body);
        res.json(usuarioAtualizxado);
    } catch (error) {
        res.status(500).send(error.toString())
    }
})
app.delete('/nota/:id',async function (req, res){
    try {
        const notaDeletada = await notasService.deleteNota(req.params.id);
        res.json(req.params.id);
    } catch (error) {
        res.status(500).send(error.toString())
    }
})

app.listen(3000);