    // ResponseComponent.js
    import React from 'react';
    import './App.css'; // Import the new CSS file

    const ResponseComponent = ({ response }) => {
    return (
        <div className="response-component">
        <p>{response}</p>
        </div>
    );
    };

    export default ResponseComponent;
