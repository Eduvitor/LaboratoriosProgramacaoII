const express = require('express');

const path = require('path');
const pgp = require("pg-promise")({});
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const usuario = process.env.DB_USER;
const senha = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const porta = process.env.DB_PORT;
const banco_de_dados = process.env.DB_NAME

const db = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${banco_de_dados}`);

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.listen(3301, () => console.log("Servidor Rodando na porta 3301"));




app.get("/index", (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get("/cursos/:id", async (req, res) => {
    const id_pesq = req.params.id;
    try {
        res.json(await db.oneOrNone(
            "SELECT * FROM cursos WHERE id = $1", [parseInt(id_pesq)]
        ));
    } catch (error) {
        console.error("Erro: ", error);
        res.send(500);
    }
});

app.get("/cursos", async (req, res) =>{
    try {
        res.json(await db.any(
            "SELECT * FROM cursos;"
        ));
    } catch (error) {
        console.error("Erro: ", error);
        res.sendStatus(500).json({ error: "Ocorreu um erro ao selecionar os cursos!"});
    }
});

app.post("/", async (req, res) => {
    const {id, nome_curso, descricao} = req.body;
    try {
        await db.none(
            "INSERT INTO cursos (id, nome_curso, descricao) VALUES ($1, $2, $3);", [id, nome_curso, descricao]
        );
        res.status(201).json({ message: "Cursos adicinado com sucesso!" });
    } catch (error) {
        console.error("ERRO: ", error);
        res.sendStatus(500);
    }
});

//delete cursos
app.delete("/delete", async (req, res) => {
    id_delete = req.body.id;
    try {
        await db.none(
            "DELETE FROM cursos WHERE ID = $1", [id_delete]
        )
        res.status(301).json( {message: "Cursos excluido com sucesso"} );
    } catch (error) {
        res.sendStatus(500);
    }
});
//modificar curso
app.put("/modifyCurso/:id", async (req, res) => {
    const id_modify = req.params.id;
    const new_desc = req.body.descricao;
    try {
        await db.none(
            "UPDATE cursos SET descricao = $1 WHERE id = $2;", [new_desc, id_modify]
        )
        res.status(201).json({message: "Curso modificado com sucesso"});
    } catch (error) {
        console.warn("Erro: ", error);
        res.status(500);
    }
});

app.get("/ccrs", async (req, res) => {
    try {
        res.json(await db.any(
            "SELECT * FROM ccrs;"
        ));
    } catch (error) {
        console.error("Erro: ", error);
        res.sendStatus(500).json({ error: "Ocorreu um erro ao selecionar os ccrs!"});
    }
});