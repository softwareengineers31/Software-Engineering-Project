import mysql from 'mysql2';
import express from 'express';
import cors from 'cors';

var app = express();
app.use(cors());

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
        var city = req.query.city;
        var street = req.query.street;
        var zip = req.query.zip;
        var propertyType = req.query.propertyType;
        var squareFoot = req.query.squareFoot;
        var beds = req.query.beds;
        var baths = req.query.baths;
        var rent = req.query.rent;
        var utilities = req.query.utilities;
        var maintFees = req.query.maintFees;
        var terms = req.query.terms;
        var availability = req.query.availability;
        var parking = req.query.parking;
        var laundry = req.query.laundry;
        var internet = req.query.internet;

        var newListing = await createPool.query("INSERT INTO Listings VALUES (?)", 
            [city, street, zip, propertyType, squareFoot, beds, baths, rent, utilities, maintFees, terms, availability, parking, laundry, internet]);

        res.json("New listing was created.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//get all listings
app.get("/", async(req, res) =>{
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
app.get("/:id", async(req, res) =>{
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

//get Listings based on search value
app.get("/:value", async(req, res) =>{
    try
    {
        var {value} = req.params;
        var Listing = await createPool.query("SELECT * FROM Listings WHERE ? in (city, street, zip, propertyType, squareFoot, beds, baths, rent, utilities, maintFees, terms, availability, parking, laundry, internet)", [value]);
        res.json(Listing[0]);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//update listing
app.put("/:id", async(req, res) =>{
    try
    {
        var city = req.query.city;
        var street = req.query.street;
        var zip = req.query.zip;
        var propertyType = req.query.propertyType;
        var squareFoot = req.query.squareFoot;
        var beds = req.query.beds;
        var baths = req.query.baths;
        var rent = req.query.rent;
        var utilities = req.query.utilities;
        var maintFees = req.query.maintFees;
        var terms = req.query.terms;
        var availability = req.query.availability;
        var parking = req.query.parking;
        var laundry = req.query.laundry;
        var internet = req.query.internet;

        var newListing = await createPool.query("INSERT INTO Listings VALUES (?)", 
            [city, street, zip, propertyType, squareFoot, beds, baths, rent, utilities, maintFees, terms, availability, parking, laundry, internet]);
        res.json("Listing was updated.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//delete listing
app.delete("/:id", async(req, res) =>{
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
        var username = req.query.username;
        var password = req.query.password;
        var email = req.query.email;
        var phone = req.query.phone;
        var newAccount = await createPool.query("INSERT INTO Users VALUES (?)", [username, password, email, phone]);

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

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});