import BreadCumb from '@/Components/Common/BreadCumb';
import Pricing1 from '@/Components/Pricing/Pricing1';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
          bgimg="/assets/images/bg/breadcumgBg.png"
          Title="Pricing"
      ></BreadCumb> 
      <Pricing1></Pricing1>       
    </div>
  );
};

export default page;