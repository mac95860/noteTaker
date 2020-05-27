const express = require('express');
const { v4: uuid } = require('uuid/v4');

const PORT = process.env.PORT || 3000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/api')(app);
require('./routes/html')(app);

// const store = new Store();

app.listen(PORT, function () {
    console.log(`App is listening on PORT ${PORT}`);
});

// app.get('/', async(req, res) => {
//     res.json(await store.getAllNotes())
// });

// app.post('/', async (req, res) => {
//     res.json(await store.addNote(req.body))
// });