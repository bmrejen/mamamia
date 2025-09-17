import React from 'react';
import Header1 from '@/Components/Header/Header1';
import Footer from '@/Components/Footer/Footer';
import FloatingBuyButton from '@/Components/Common/FloatingBuyButton';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            {children}
            <Footer></Footer>
            <FloatingBuyButton></FloatingBuyButton>
        </div>
    );
};

export default DefalultLayout;