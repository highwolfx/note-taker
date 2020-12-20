const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid/v4");

module.exports = (nt) => {
    nt.get('/api/notes', (req,res)=>{
        res.json(db);
    });

    nt.post('/api/notes', (req,res)=>{
        let noteID = uuid();
        let newNote = {
            id: noteID,
            title: req.body.title,
            text: req.body.text
        };
        db.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), (err)=>{
            if (err) throw err;
            console.log('New note has been created!');
        });

        res.json(db);
    });

    nt.delete('/api/notes/:id', (req,res)=>{

        let noteID = req.params.id;

        for (let i=0;i<db.length;i++){
            if(db[i].id === noteID){
                db.splice(i,1);
                break;
            };
        };

        fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 2), err => {
            if (err) throw err;
            console.log('Note was deleted');
        });
        res.json(db);
    });
};