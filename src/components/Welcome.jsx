import React from 'react';
import './Welcome.css'

const Welcome = (props) => {
    return (
        <div className='welcome-screen'>
            <center>
                <h1>&#128218; Dictionary App</h1>
                <img className='search-gif' src="/englishdictionary/searchimage.gif" alt="search img" />
                <button onClick={props.screenChangeFunction}>Search A Word</button>
            </center>
        </div>
    );
}

export default Welcome;
