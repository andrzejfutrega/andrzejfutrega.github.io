import React, { useRef } from 'react';

function UseRefEx() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>useRef Example</h2>
            <input ref={inputRef} type="text" placeholder="Focus on me!" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default UseRefEx;
