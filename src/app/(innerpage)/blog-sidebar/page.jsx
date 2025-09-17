import BlogStandard from '@/Components/Blog/BlogStandard';
import BreadCumb from '@/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Blog Standard"
            ></BreadCumb> 
            <BlogStandard></BlogStandard>              
    </div>
  );
};

export default page;