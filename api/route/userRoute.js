// const express = require('express');
// const router= express.Router();
// const usersService= require('../service/usersService');
// const { json } = require('body-parser');

// router.get('/users',async function (req, res){
//     const users = await usersService.getUsers();
//     res.json(users);
// });
// router.get('/users/:id',async function (req, res){
    
// });

// router.post('/users',async function (req, res){
//     try {
//         const userCriado = await usersService.createNewUser(req.body.usuario, req.body.senha);
//         res.json(userCriado);
//     } catch (error) {
//         res.status(500).send(error.toString())
//     }
    
    
// })

// router.put('/users/',async function (req, res){
//     try {
//         const usuarioAtualizxado= await usersService.updateUser(req.body.usuario, req.body.senha);
//         res.json(usuarioAtualizxado);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
// router.delete('/users/:id',async function (req, res){
    
// })

// module.exports = router;