import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import JobSeekersAll from '../JobSeekersAll/JobSeekersAll'; 

const JobSeekers = () => {
    return (
        <div>
            <JobSeekersAll/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default JobSeekers;