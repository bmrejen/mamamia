import BreadCumb from '@/Components/Common/BreadCumb';
import TeamDetails from '@/Components/TeamDetails/TeamDetails';
import React from 'react';

const page = () => {
  return (
    <div>
          <BreadCumb
            bgimg="/assets/images/bg/breadcumgBg.png"
            Title="Team Details"
        ></BreadCumb> 
        <TeamDetails></TeamDetails>      
    </div>
  );
};

export default page;