import mysql from 'mysql2';
import express from 'express';

var app = express();
var port = 3000;
app.use(express.json());
//Establish database connection
const tush=mysql.createPool(
    {
        //Endpoint from Amazon RDS
        host:'tushplatform.cx0goikkws0s.us-east-2.rds.amazonaws.com',
        //DBUsername
        user:'admin',
        //DBPassword
        password:'Software#TU24',
        //DBName
        database:'tushplatform'
    }
).promise()

const result = await tush.query("SELECT * FROM Students")
console.log(result)

//Listings section

//create listing
app.post("/createListing", async (req,res) => {
    try
    {
        var {description} = req.body;
        var newListing = await createPool.query("INSERT INTO Listings (description) VALUES (?)", [description]);

        res.json("New listing was created.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//get all listings
app.get("/Listings", async(req, res) =>{
    try
    {
        var Listings = await createPool.query("SELECT * FROM Listings");
        res.json(Listings);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//get single listing
app.get("/Listings/:id", async(req, res) =>{
    try
    {
        var {id} = req.params;
        var Listing = await createPool.query("SELECT * FROM Listings WHERE idListings = ?", [id]);
        res.json(Listing[0]);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//update listing
app.put("/Listings/:id", async(req, res) =>{
    try
    {
        var {id} = req.params;
        var {description} = req.body;
        var updateListing = await createPool.query("UPDATE Listings SET description = ? WHERE idListings = ?", [description, id]);
        res.json("Listing was updated.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//delete listing
app.delete("/Listings/:id", async(req, res) =>{
    try
    {
        var {id} = req.params;
        var deleteListing = await createPool.query("DELETE FROM Listings WHERE idListings = ?", [id]);
        res.json("Listing was deleted.")
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//account/roommate section

//create account
app.post("/createAccount", async (req,res) => {
    try
    {
        var {description} = req.body;
        var newListing = await createPool.query("INSERT INTO Users (description) VALUES (?)", [description]);

        res.json("New user was created.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//get all roommates
app.get("/roommates", async(req, res) =>{
    try
    {
        var Listings = await createPool.query("SELECT * FROM Students");
        res.json(Listings);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//get single roommate
app.get("/roommates/:id", async(req, res) =>{
    try
    {
        var {id} = req.params;
        var Listing = await createPool.query("SELECT * FROM Students WHERE idStudents = ?", [id]);
        res.json(Listing[0]);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//update account
app.put("/account/:id", async(req, res) =>{
    try
    {
        var {id} = req.params;
        var {description} = req.body;
        var updateListing = await createPool.query("UPDATE Users SET description = ? WHERE idUsers = ?", [description, id]);
        res.json("Listing was updated.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//delete account
app.delete("/account/:id", async(req, res) =>{
    try
    {
        var {id} = req.params;
        var deleteListing = await createPool.query("DELETE FROM Users WHERE idUsers = ?", [id]);
        res.json("Listing was deleted.")
    }
    catch(err)
    {
        console.error(err.message);
    }
});