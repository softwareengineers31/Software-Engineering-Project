import './App.css';
import{BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from "./components/Header";
import Signup from "./components/SignUp/signup";
import LoginForm from "./components/LoginPage/loginpage";
import Dashboard from "./components/dashboard/dashboard";
import SignupForm from "./components/SignUp/signup";
import AdminDashboard from "./components/dashboard/admin/admin";
import StudentDashboard from "./components/dashboard/student/student";
import LandlordDashboard from "./components/dashboard/landlord/landlord";


function App() {
    const userRole = localStorage.getItem('role');
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/loginpage" element={<LoginForm />} />
                {/*<Route path="/signup" element={<SignupForm />} />*/}
                {/*<Route path="/login" element={<LoginForm />} />*/}
                {/*<Route path="/admin" element={<AdminDashboard />} />*/}
                {/*<Route path="/landlord" element={<LandlordDashboard />} />*/}
                {/*<Route path="/student" element={<StudentDashboard />} />*/}
                <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
            </Routes>
        </Router>
        // <div className="App">
        //     <Header />
        //
        //     {/* Add a margin bottom to the header to create space between the header and search components */}
        //     <div className="mb-4"> {/* Adjust the value as needed */}
        //         <Search />
        //     </div>
        // </div>
    );
}


export default App;
