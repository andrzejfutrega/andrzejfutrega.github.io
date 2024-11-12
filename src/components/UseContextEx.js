import React from 'react';
import { useMyContext } from './MyContext';

function UseContextEx() {
    const value = useMyContext();

    return (
        <div>
            <h2>useContext Example</h2>
            <p>{value}</p>
        </div>
    );
}

export default UseContextEx;
