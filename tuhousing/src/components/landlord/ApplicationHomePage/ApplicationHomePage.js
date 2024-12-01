import React, { useState } from 'react';
import ApplicationReviewComponent from "../ApplicationRequestReview/applicationReview";


const ApplicationHomePage = () => {
    const [applications, setApplications] = useState([]);

    // const addApplication = (application) => {
    //     setApplications((prev) => [...prev, application]);
    // };

    const handleApproval = (index) => {
        const updatedApplications = [...applications];
        updatedApplications[index].status = 'Approved';
        setApplications(updatedApplications);
    };

    const handleRejection = (index) => {
        const updatedApplications = [...applications];
        updatedApplications[index].status = 'Rejected';
        setApplications(updatedApplications);
    };

    return (
        <div>
            {/*<AddApplicationButton addApplication={addApplication} />*/}
            <ApplicationReviewComponent
                applications={applications}
                handleApproval={handleApproval}
                handleRejection={handleRejection}
            />
        </div>
    );
};

export default ApplicationHomePage;
