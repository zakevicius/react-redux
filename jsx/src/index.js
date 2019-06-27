// Import the react and react.DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

function getTime() {
    return (new Date()).toLocaleTimeString();
}

// Create a react component
const App = () => {
    const buttonText = { text: "Click Me" };
    const style = { backgroundColor: 'blue', color: 'white' };
    const labelText = "Enter name: "

    return (
        <div>
            <label htmlFor="name" className="label">{labelText}</label>
            <input id="name" type="text"/>
            <button style={style}>{buttonText.text}</button>
            {getTime()}
        </div>
    );
};

// Take react component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);