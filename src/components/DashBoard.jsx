import React from 'react';
import DashBoardItems from './DashBoardItems';

const DashBoard = ({darkToggle}) => {
    return (
        <div className={`w-full h-fit -z-10 ${darkToggle ? 'dark:bg-gray-900' : 'bg-gray-50'} flex items-center flex-col dark:bg-gray-700`} id='scroll-board'>
            <DashBoardItems />
        </div>
    );
};

export default DashBoard;