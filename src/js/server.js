const express = require("express");
const fs = require("fs");
const mysql = require('mysql2');

const app = express();
const jsonParser = express.json();

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "fna26092002",
    database: "mcas"
};

const dbConnection = mysql.createConnection(connectionOptions);

/*
app.get("/api/beattypes/get/all", function (req, res) {
    dbConnection.connect(function (r) {
        if (r) throw r;

        dbConnection.query(`SELECT * FROM beattype `, (err, result, fields) => {
            if (r) throw r;
            r.send(result);
        });
    });
});
*/

app.get('/api/beattypes/get/all', (request, response) => {
    const sql = 'SELECT * FROM beattype ';

    dbConnection.connect(r => {
        if (r) throw r;
        dbConnection.query(sql, (r, result, fields) => {
            if (r) throw r;
            response.send(result);
        });
    });
})

app.get("/api/beattypes/:id", function (req, res) {
    const sql =
        "SELECT * " +
        "FROM beattype " +
        `WHERE id = ${req.params.id}`;

    dbConnection.connect(function (r) {
        if (r) throw r;

        dbConnection.query(sql, (r, result, fields) => {
            if (r) throw r;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.post("/api/beattypes/add", jsonParser, function (req, res) {
    if (!req.body)
        return res.sendStatus(400);

    let beattype = [req.body.id, req.body.name, req.body.description, req.body.repo];

    const sql = "insert into beattype (id, name, description, repo) values (?, ?, ?, ?)";

    dbConnection.connect(function (r) {
        if (r) throw r;

        dbConnection.query(sql, beattype, (r, result, fields) => {
            if (r) throw r;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.delete("/api/beattypes/delete/:id", function (req, res) {
    const sql =
        "DELETE " +
        "FROM beattype " +
        `WHERE id = ${req.params.id}`;

    dbConnection.connect(function (r) {
        if (r) throw r;

        dbConnection.query(sql, (r, result, fields) => {
            if (r) throw r;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.put("/api/beattypes/put/update", jsonParser, function (req, res) {
    const sql = 'UPDATE beattype ' + 'SET id = ?, name = ?, description = ?, repo = ?' + `WHERE id = ${req.body.id}`;
    const parts = [req.body.id, req.body.name, req.body.description, req.body.repo]

    dbConnection.connect(function (r) {
        if (r) throw r;

        dbConnection.query(sql, parts,(r, result, fields) => {
            if (r) throw r;
            result ? res.send(result) : res.sendStatus(500);
        });
    });
});

const PORT = 3000 || process.env.PORT;

try {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
} catch (error) {
    console.log(error);
}