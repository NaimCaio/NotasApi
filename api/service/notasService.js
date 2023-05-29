const notasData = require('../data/notasData');

exports.getNotas = function () {
    return notasData.getNotas();
}

exports.getUsuarioNotas = function (usuarioId) {
    console.log(usuarioId)
    return notasData.getNotasUsuario(usuarioId);
}

exports.createNota=  async function (nota,usuario) {
    resp = await notasData.insertNota(nota,usuario);
    return resp;
}
exports.updateNota = async function (nota){
    //checar se nota existe
    notaBase = await notasData.getNota(nota.id);
    if(notaBase[0] ==undefined){
        throw new Error('Nota não encontrada')
    }
    return notasData.updateNota(nota)
}
exports.deleteNota = async function (notaId){
    //checar se nota existe
    notaBase = await notasData.getNota(notaId);
    if(notaBase[0] ==undefined){
        throw new Error('Nota não encontrada')
    }
    return notasData.deleteNota(notaId)
}