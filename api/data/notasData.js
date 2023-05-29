const database = require('../infra/database');

exports.getNotas= function(){
    return database.query('select * from projetofinal.notas');
}
exports.getNotasUsuario= function(usuarioId){
    const query = `select * from projetofinal.notas where usuario_id='${usuarioId}';`;
    return database.query(query);
}

exports.getNota= function(notaId){
    const query = `select * from projetofinal.notas where id='${notaId}';`;
    return database.query(query);
}

exports.insertNota= function(nota, usuario){
    const query = `INSERT INTO projetofinal.notas( 
        usuario_id, titulo, conteudo)
        VALUES (${usuario.id}, '${nota.titulo}', '${nota.conteudo}');`;
        console.log(query)
    return database.query(query);
}

exports.updateNota= function(nota){
    const date = new Date();
    const formattedDate = date.toLocaleString(); // Convert date to a formatted string

    const query = `UPDATE projetoFinal.notas SET titulo='${nota.titulo}', conteudo='${nota.conteudo}', atualizacao='${formattedDate}' WHERE id=${nota.id};`;
    return database.query(query);
}

exports.deleteNota= function(notaId){

    const query = `delete from projetoFinal.notas  WHERE id=${notaId};`;
    return database.query(query);
}