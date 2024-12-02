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

export default createPool;

//Routes
app.use("/studentsr",studentsRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});