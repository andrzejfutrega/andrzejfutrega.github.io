import React, { useState, useEffect } from 'react';

function UseEffectEx() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h2>useEffect Example</h2>
            <p>Check document title for count value!</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffectEx;
