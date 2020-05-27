const fs = require('fs');
const { v4: uuid } = require('uuid/v4');

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {
            if (error) throw error;
            res;
        });
    });

    app.post('/api/notes', function (req, res) {
        fs.readFile('../db/db.json', 'utf8', function (error, data) {
            const db = JSON.parse(data);

            var newNote = {
                id: uuid(),
                ...req.body
            };

            db.push(newNote);

            fs.writeFile('../db/db.json', JSON.stringify(db), function (error) {
                if (error) throw error;
                res.json(newNote);
            });
        });
    })

    app.delete('/api/notes/:id', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {


        });
    });
}
