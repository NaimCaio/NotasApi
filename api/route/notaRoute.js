// const express = require('express');
// const router= express.Router();
// const notasService= require('../service/notasService');

// router.get('/notas',async function (req, res){

//    const notas = await notasService.getNotas()
//    res.json(notas);
// });
// router.get('/notasUsuario/:id',async function (req, res){
//     const notaCriada = await notasService.getUsuarioNotas(req.params.id);
//     res.json(notaCriada);
// });

// router.post('/criarNota',async function (req, res){
//     try {
//         const notaCriada = await notasService.createNota(req.body.nota, req.body.usuario);
//         res.json(notaCriada);
//     } catch (error) {
//         res.status(500).send(error.toString())
//     }
    
    
// })

// router.put('/atualizaNota',async function (req, res){
//     try {
//         const usuarioAtualizxado= await notasService.updateNota(req.body);
//         res.json(usuarioAtualizxado);
//     } catch (error) {
//         res.status(500).send(error.toString())
//     }
// })
// router.delete('/nota/:id',async function (req, res){
//     try {
//         const notaDeletada = await notasService.deleteNota(req.params.id);
//         res.json(req.params.id);
//     } catch (error) {
//         res.status(500).send(error.toString())
//     }
// })

// module.exports = router;