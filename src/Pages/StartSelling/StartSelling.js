import React from 'react';
import BackgroundImageWithRange from './BackgroundImageWithRange';
import FreelancersImage from './FreelancersImage';
import WorksPlan from './WorksPlan';
import QuestionAndAnswer from './QuestionAndAnswer';



const StartSelling = () => {
    return (
        <div className='mt-12'>
           <BackgroundImageWithRange/> 
         <FreelancersImage></FreelancersImage>
         <WorksPlan/>
         <QuestionAndAnswer/>
         
        </div>
    );
};

export default StartSelling;