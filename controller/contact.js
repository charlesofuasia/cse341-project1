const mongodb = require("../database/dbconnection");
const ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res) => {
   try {
    const result = await mongodb.getDatabase().db().collection("contacts").find();
    result.toArray().then((contacts)=> {
        res.setHeader("Content-Type", "application/json");
        res.status(201).json(contacts);
        console.log(contacts)
    })

   }catch(error){
    console.error(error);

   }
}




module.exports = {
    getContacts
}