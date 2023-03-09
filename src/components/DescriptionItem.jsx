import React from 'react';

const DescriptionItem = ({title, value}) => {
    return (
        <div className={`flex w-full p-3 ${title !== 'poster' && 'border-b-2'}`}>
            <div className='w-1/3 font-light text-sm uppercase flex justify-start items-center'>{title}</div>
            <div className='w-2/3 text-sm font-mono break-words md:text-xs mx-auto'>{value}</div>
        </div>
    );
};

export default DescriptionItem;