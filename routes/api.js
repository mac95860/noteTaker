const fs = require('fs');
const { v4: uuidv4} = require('uuid');

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {//read files return data as string
            if (error) throw error;
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {
            console.log(data);
            const db = JSON.parse(data);

            const newNote = {
                id: uuidv4(),
                ...req.body
            };

            db.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(db), function (error) {
                if (error) throw error;
                res.json(newNote);
            });
        });
    })

    app.delete('/api/notes/:id', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {
            
            const db = JSON.parse(data);
            console.log(db);
            const deletedNote = db.filter((note) => note.id !== req.params.id);
          
            fs.writeFile('./db/db.json', JSON.stringify(deletedNote), function (error) {
                if(error) throw error;
                
                res.json(deletedNote);
            })
        })
    });
}
