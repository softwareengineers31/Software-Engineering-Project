import './style.css';
import axios from "axios";
import {useEffect, useState} from "react";
const roomatehtml = 
<html>
    <head>
        Find a Roommate
    </head>
    <body>
        <header>
            <nav class="nav">
                <ul>
                    <li>Page 1</li>
                    <li>Page 2</li>
                    <li>Page 3</li>
                    <li>Page 4</li>
                </ul>
            </nav>
            <h1 class="title">
                Find Your Next Roommate
            </h1>
        </header>
        <div class="sorter">
            <ul>
                <li>
                    <div class="perfect">
                        <h1>Perfect</h1>
                    </div>
                </li>
                <li>
                    <div class="good">
                        <h1>Good</h1>
                    </div>
                </li>
                <li>
                    <div class="maybe">
                        <h1>Maybe</h1>
                    </div>
                </li>
                <li>
                    <div class="not">
                        <h1>Absolutely Not</h1>
                    </div>
                </li>
            </ul>
        </div>
            <div class="image">
                    <h1>Name</h1>
            </div>
            <div class="features">
                <table>
                    <thead>
                        <tr>
                            <th>Cleaning Frequency</th>
                            <th>Sleep Schedule</th>
                            <th>Guest</th>
                            <th> Noise Level</th>
                            <th>Sleeping Habits</th>
                            <th>Substance Use</th>
                            <th>Expense Sharing</th>
                            <th>Budget</th>
                            <th>Conflict Resolution Style</th>
                            <th>Pets</th>
                        </tr>
                    </thead>
                </table>
            </div>
    </body>
</html>
;
const RoommateMatchingPage = () => {
    const [studentsr,setStudents]=useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() =>{
    axios.get("http://localhost:5000/studentsr")
    .then((response) => {
        console.log(response.data);
        const flattenedData = response.data.flat();
        console.log("Flattened Data:", flattenedData); 
        setStudents(Array.isArray(flattenedData) ? flattenedData: [])
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

    },[]);
    const currentStudent = studentsr[currentIndex];
    const nextStudent = () => {
        if (currentIndex < studentsr.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return(
        <div className="App">
            <h1>Find a Roomate</h1>
            {studentsr.length > 0 ? (
                <div>
                    <div class = "image">
                    <h2>Name: {currentStudent.First_Name} {currentStudent.Last_Name}</h2>
                    </div>
                    <div class ="features">
                        <table>
                            <thead>
                                <tr>
                                    <th>Cleaning Frequency</th>
                                    <th>Sleep Schedule</th>
                                    <th>Guest</th>
                                    <th>Noise Level</th>
                                    <th>Sleeping Habits</th>
                                    <th>Substance Use</th>
                                    <th>Expense Sharing</th>
                                    <th>Budget</th>
                                    <th>Conflict Resolution Style</th>
                                    <th>Pets</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <button onClick={nextStudent} disabled={currentIndex === studentsr.length - 1}>Next</button>
                </div>
                
            ) : (
                <p>Loading student...</p>
            )}
        </div>
    );
};

export default RoommateMatchingPage;