const express = require("express")
const server = express()
// pegar o banco de dados
const db = require("./database/db.js")

server.use(express.static("public"))
//hablitar o uso do req.body
server.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    //req.query: Query Strings da nossa url
    // console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // req.body: o corpo do form
    // console.log(req.body)
    //inserir dados no banco de dados
    const query = `
        INSERT INT lugares (
            image,
            name,
            address,
            address2,
            uf,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.uf,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.render("index.html", { fail: true})
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {
    const search = req.query.search
    if(search == "") {
        return res.render("search-result.html", {total: 0})
    }

    //pegar os dados do db
    db.all(`SELECT * FROM lugares WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)

        const total = rows.length
        //mostrar a pagina com os dados
        return res.render("search-result.html", { lugares: rows, total })
    })
})

server.listen(3000)