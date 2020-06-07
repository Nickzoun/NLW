// importar a dependencia sqlite3
const sqlite3 = require("sqlite3").verbose()
//criar o objeto que ira fazer opreções no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
db.serialize(() => {
   // criar tabela
    // db.run(`
    //         CREATE TABLE IF NOT EXISTS lugares (
    //             id INTEGER PRIMARY KEY AUTOINCREMENT,
    //             image TEXT,
    //             name TEXT,
    //             address TEXT,
    //             address2 TEXT,
    //             uf TEXT,
    //             city TEXT,
    //             items TEXT
    //         );
    // `)
//     //add dados
//     // const query = `
//     //     INSERT INTO lugares (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1589455719452-1ac812ae7a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e papelão"
//     // ]

//     // function afterInsertData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)
//     //consultar os dados
//     // db.all(`SELECT * FROM lugares`, function(err, rows) {
//     //   if(err) {
//     //     return console.log(err)
//     // }

//     //console.log("Aqui estão seus registros: ")
//     //console.log(rows)
//     // })

//     //deletar um dado
    // db.run(`DELETE FROM lugares`, function(err) {
    //  if(err) {
    //    return console.log(err)
    // }

    // console.log("Registro deletado com sucesso")
    // })
})