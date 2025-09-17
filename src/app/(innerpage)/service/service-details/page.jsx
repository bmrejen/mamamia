import BreadCumb from '@/Components/Common/BreadCumb';
import ServiceDetails from '@/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Services Details"
            ></BreadCumb> 
            <ServiceDetails></ServiceDetails>        
    </div>
  );
};

export default page;