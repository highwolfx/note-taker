const path = require('path');

module.exports = (nt) => {
    nt.get('/notes',(req,res)=>{
        res.sendFile(path.join(__dirname,'../public/notes.html'))
    });

    nt.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

};