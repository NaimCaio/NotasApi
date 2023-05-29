const pgp = require('pg-promise')();
// const db = pgp({
//     user:'postgres',
//     password:"admin123",
//     host:'localhost',
//     port: 5432,
//     database:'postgres'
// });
const db = pgp({
    user:'postgres',
    password:"bH3llmqXUMhOT0UrZCkn",
    host:'containers-us-west-185.railway.app',
    port: 5511,
    database:'railway'
});


module.exports= db;