import React from 'react';
import DashBoardItems from './DashBoardItems';
import Header from './Header';

const DashBoard = () => {
    return (
        <div className='w-full h-fit -z-10 dashboardStyle flex items-center flex-col'>
            <Header />
            <DashBoardItems />
        </div>
    );
};

export default DashBoard;