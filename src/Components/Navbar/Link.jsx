import React from 'react';

const Link = ({route}) => {
    return (
   
            <li className='mr-10 bg-blue-950 px-4 py-2 hover:bg-blue-700  '>
                <a href={route.path}>{route.name}</a>
            </li>

    );
};

export default Link;