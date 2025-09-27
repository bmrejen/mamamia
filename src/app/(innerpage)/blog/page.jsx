import Blog2 from "@/Components/Blog/Blog2";
import BreadCumb from "@/Components/Common/BreadCumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/images/bg/breadcumgBg.png" Title="Blog Grid"></BreadCumb>
      <Blog2></Blog2>
    </div>
  );
};

export default page;
