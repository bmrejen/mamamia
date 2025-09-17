import BlogDetails from '@/Components/BlogDetails/BlogDetails';
import BreadCumb from '@/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
         <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Blog Details"
            ></BreadCumb>
            <BlogDetails></BlogDetails>        
    </div>
  );
};

export default page;