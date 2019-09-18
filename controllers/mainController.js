
const db = require('../db/db');

exports.getController = (req , res, next) => { 

    db.serialize(function(){

       db.all("SELECT * FROM results" ,   function(err , rows){
           if(err){
                res.status(400).json({statusCode : 400 , message : 'Bad Request!'  , err:err});
           }
            res.status(200).json({statusCode : 200 , message : 'BugList retrived sucessfully!' , data : rows });
       }) 
    });
}