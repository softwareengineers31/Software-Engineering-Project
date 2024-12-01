import './App.css';
import{BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from "./components/Header";
import Signup from "./components/SignUp/signup";
import LoginForm from "./components/LoginPage/loginpage";
import Dashboard from "./components/dashboard/dashboard";
import SignupForm from "./components/SignUp/signup";
import AdminDashboard from "./components/admin/AdminDashboard/admin";
import StudentDashboard from "./components/manage-student/StudentDashboard/student";
import LandlordDashboard from "./components/landlord/LandlordDashboard/landlord";
import LeasingApplicationRequest from "./components/manage-student/ListingApplicationRequest/listingRequest";
import ApplicationRequestReview from "./components/landlord/ApplicationRequestReview/applicationReview";
import PropertyDetails from "./components/admin/ManageProperty/ManageListing/PropertyDetails/propertydetails";
import PropertyListings from "./components/admin/ManageProperty/ManageListing/AllPropertyListing";
import CarpoolListing from "./components/manage-student/Carpool/CarpoolListing/CarpoolListing";
import CarpoolListingPage from "./components/manage-student/Carpool/carpoolListingPage";
import RoommateMatchingPage from "./components/manage-student/RoommateMatching/RoommateMatching";
import ApplicationHomePage from "./components/landlord/ApplicationHomePage/ApplicationHomePage";
import StudentPropertyList from "./components/manage-student/StudentPropertyList/StudentPropertyList";
import PropertyListing from "./components/admin/ManageProperty/ManageListing/AllPropertyListing";
import ApproveStatusView from "./components/manage-student/ApproveStatusView/ApproveStatusView";
import ViewHouseRejection
    from "./components/manage-student/ViewHouseRejectionStatus/ViewHouseRejection/ViewHouseRejection";
import ViewAllAvailableListing from "./components/admin/ManageProperty/ViewAvailableListing/ViewAllAvailableListing";
import ManageProperty from "./components/admin/ManageProperty/manageproperty";
import AllPropertyListing from "./components/admin/ManageProperty/ManageListing/AllPropertyListing";
import AddListing from "./components/admin/ManageProperty/ManageRegistration/AddListing/AddListing";
import AdditionalInformation from "./components/landlord/AdditionalInformation/AdditionalInformation";
import LeaseAgreementPage from "./components/landlord/LeaseAgreementPage/LeaseAgreementPage";
import StudentAvailableListing
    from "./components/admin/ManageProperty/ManageListing/StudentViewAllAvailableListing/StudentAvailableListing";


function App() {
    const userRole = localStorage.getItem('role');
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/loginpage" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
                <Route path="/leasing-request" element={<LeasingApplicationRequest />} />
                <Route path="/application-review" element={<ApplicationRequestReview />} />
                <Route path="/view-leasing-request" element={<ApplicationRequestReview />} />
                <Route path="/property-list" element={<PropertyListings />} />
                <Route path="/carpool-listing" element={<CarpoolListingPage />} />
                <Route path="/roommate-matching" element={<RoommateMatchingPage />} />
                <Route path="/application-homepage" element={<ApplicationHomePage />} />
                <Route path="/student-propertylisting" element={<StudentPropertyList />} />
                <Route path="/allproperty-listing" element={<PropertyListing />} />
                <Route path="/approvestatus-view" element={<ApproveStatusView />} />
                <Route path="/viewstatus-rejection" element={<ViewHouseRejection />} />
                <Route path="/viewavailable-listings" element={< ViewAllAvailableListing/>} />
                <Route path="/manage-property" element={< ManageProperty/>} />
                <Route path="/allproperty-listing" element={< AllPropertyListing/>} />
                <Route path="/add-listing" element={< AddListing/>} />
                <Route path="/additional-information" element={< AdditionalInformation/>} />
                <Route path="/lease-agreement" element={< LeaseAgreementPage/>} />
                <Route path="/studentavailable-listing" element={<StudentAvailableListing />} />

            </Routes>
        </Router>

    );
}


export default App;
