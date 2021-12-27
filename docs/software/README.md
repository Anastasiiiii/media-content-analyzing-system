# Реалізація інформаційного та програмного забезпечення


##SQL-скрипт для створення на початкового наповнення бази даних
```SQL
insert into beattype (id, name, description, repo) values (1, 'application/msword', 'Displacement of implanted electronic', '61c767a6fc13ae2fef0000c8');
insert into beattype (id, name, description, repo) values (2, 'video/quicktime', 'Other fracture of T9-T10 vertebra', '61c767a6fc13ae2fef0000c9');
insert into beattype (id, name, description, repo) values (3, 'video/x-mpeg', 'Unspecified injury of left i', '61c767a6fc13ae2fef0000ca');
```
##RESTfull сервіс для управління даними
```JS
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
```
### Опис кінцевих точок RESTfull сервісу доступу до даних
- '/api/beattypes/get/all' - Отримати всі типи бітов
- '/api/beattypes/:id' - Отримати певний тип біта
- '/api/beattypes/delete/:id' - Видалити тип біта
- '/api/beattypes/add' - Додати тип біта
- '/api/beattypes/put/update' - Оновити дані

[Тестування працездатності системи](https://Anastasiiiii.github.io/media-content-analyzing-system/test/)