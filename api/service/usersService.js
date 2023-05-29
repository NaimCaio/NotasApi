const usersData = require('../data/usersData');

exports.getUsers = function () {
    return usersData.getUsers();
}

exports.createNewUser =  async function (usuario, senha) {
    usuariobase = await usersData.getUser(usuario);
    console.log(usuariobase[0]);
    if(usuariobase[0] !=undefined){
        throw new Error('Usuario já cadastrado');
 
    }
    resp = usersData.insertUser(usuario, senha)
    return resp;
}
exports.updateUser = async function (usuario, senha){
    //checar se usuario existe
    usuariobase = await usersData.getUser(usuario);
    if(usuariobase[0] ==undefined){
        throw new Error('Usuário não encontrado')
    }
    return usersData.updateUser(usuario,senha)
}