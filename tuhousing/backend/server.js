import mysql from 'mysql2';
import express from 'express';
import cors from 'cors';
import studentsRouter from './Routes/Students.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:3001',
  }));
  app.use(express.json());

//Establish database connection
const createPool=mysql.createPool(
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
//const result = await createPool.query("SELECT * FROM Students")
//console.log(result)

//Listings section

//create listing
app.post("/add-listing", async (req,res) => {
    try
    {
        var username = req.body.username;
        var name = req.body.name;
        var contactInfo = req.body.contactInfo;
        var city = req.body.propertyLocation.city;
        var street = req.body.propertyLocation.street;
        var zip = req.body.propertyLocation.zipCode;
        var propertyType = req.body.propertyType;
        var squareFoot = req.body.propertySize.squareFootage;
        var beds = req.body.propertySize.bedrooms;
        var baths = req.body.propertySize.bathrooms;
        var rent = req.body.amount.rent;
        var utilities = req.body.amount.utilities;
        var maintFees = req.body.amount.maintenanceFees;
        var terms = req.body.leaseTerms;
        var availability = req.body.availability;
        var parking = req.body.amenities.parking;
        var laundry = req.body.amenities.laundry;
        var internet = req.body.amenities.internet;
        var amenities = req.body.amenities;
        var utilIncluded = req.body.amenities.utilitiesIncluded;
        var videos = req.body.videos;
        var images = req.body.images;

        var LandlordId = await createPool.query("SELECT landlordID FROM Users WHERE Username = ?",[username]);
        console.log(JSON.stringify(LandlordId[0][0].landlordID));
        var id = LandlordId[0][0].landlordID;
        console.log(id);
        var newListing = await createPool.query("INSERT INTO Listings (City, Street, ZipCode, PropertyType, SqFootage, NumBedrooms, NumBathrooms, RentPrice, AvailabilityDate, HighSpeedInternetAccess, leaseterms, Landlord_idLandlord) VALUES ('"
            +city+"', '"+ street+"', "+ zip+", '"+ propertyType+"', "+ squareFoot+", "+ beds+", "+ baths+", "+ rent+", '"+ availability+"', '"+ internet+"', '"+ terms+"', '"+ id+"')");
        
        //var newAccount = await createPool.query("INSERT INTO Users (Username, Passwordhash, Email, Phone, Role) VALUES ('"+username+"', '"+password+"', '"+email+"', "+contactInfo+", '"+role+"')");

        res.json("New listing was created.");
        console.log("New listing was created.");
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
        var city = req.body.city;
        var street = req.body.street;
        var zip = req.body.zip;
        var propertyType = req.body.propertyType;
        var squareFoot = req.body.squareFoot;
        var beds = req.body.beds;
        var baths = req.body.baths;
        var rent = req.body.rent;
        var utilities = req.body.utilities;
        var maintFees = req.body.maintFees;
        var terms = req.body.terms;
        var availability = req.body.availability;
        var parking = req.body.parking;
        var laundry = req.body.laundry;
        var internet = req.body.internet;

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
        res.json("Listing was deleted.");
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//account/roommate section

//create account
app.post("/signup", async (req,res) => {
    try
    {
        var role = req.body.role;
        var fullName = req.body.fullName;
        var username= req.body.username;
        var email= req.body.email;
        var password= req.body.password;
        var contactInfo= req.body.contactInfo;
        var address= req.body.address;
        var governmentId= req.body.governmentId;
        var proofOfOwnership= req.body.proofOfOwnership;
        var bankDetails= req.body.bankDetails;
        var housingRegistration= req.body.housingRegistration;
        var id= req.body.id;

        console.log("Role "+role);
        console.log("Passing info "+fullName+username+email+password+contactInfo);

        //var newAccount1 = await createPool.query("INSERT INTO Students (First_Name, PhoneNumber, UniversityID) VALUES ('"+fullName+"', "+contactInfo+", "+contactInfo+")");
        //var StudentID = await createPool.query("SELECT idStudents FROM Students WHERE UniversityID = '"+contactInfo+"'");
        //console.log("Passing info "+StudentID);
        if(role === 'Student')
            var newAccount = await createPool.query("INSERT INTO Users (Username, Passwordhash, Email, Phone, Role, studentID) VALUES ('"+username+"', '"+password+"', '"+email+"', "+contactInfo+", '"+role+"', '"+id+"')");
        else if(role === 'Landlord')
            var newAccount = await createPool.query("INSERT INTO Users (Username, Passwordhash, Email, Phone, Role, landlordID) VALUES ('"+username+"', '"+password+"', '"+email+"', "+contactInfo+", '"+role+"', '"+id+"')");
        else
            var newAccount = await createPool.query("INSERT INTO Users (Username, Passwordhash, Email, Phone, Role) VALUES ('"+username+"', '"+password+"', '"+email+"', "+contactInfo+", '"+role+"')");

        res.json(newAccount);
        console.log("Account created.")
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//login to account
app.post("/login", async (req,res) => {
    try
    {
        var username = req.body.username;
        var password = req.body.password;
        console.log("U and P: "+username+" "+password);
        var newAccount = await createPool.query("SELECT * from Users WHERE ? in (Username, Passwordhash)", [username, password]);
        //JSON_ARRAYAGG(JSON_OBJECT('username', Username,'password', Passwordhash, 'role', Role))
        //var role = await createPool.query("SELECT Role FROM Users WHERE ? in (Username, Passwordhash)", [username, password]);
        //look into continued login/token;
        console.log("Role "+ newAccount[0][0].role);
        console.log("User " + newAccount[0][0].Username);
        res.json(newAccount[0][0].role);
        console.log("User logged in.");
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

export default createPool;

//Routes
app.use("/studentsr",studentsRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});