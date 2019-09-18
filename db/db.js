const fs = require('fs');

const sqlite3 = require('sqlite3').verbose();

const dbFile = './results.db';

const  dbExists = fs.existsSync(dbFile);

if (!dbExists) {
    fs.openSync(dbFile, 'w');
}

const db = new sqlite3.Database(dbFile , sqlite3.OPEN_READWRITE,  (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Database Setup!');
    }
});

module.exports = db;
