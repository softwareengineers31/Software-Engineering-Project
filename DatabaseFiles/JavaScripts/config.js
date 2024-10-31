import mysql from 'mysql2'

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