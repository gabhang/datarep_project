import React, { Component } from 'react';

// create class MainPage with words and time
class MainPage extends Component {
    render() {
        return (
            // homepage with background image, welcoming message and current time
            <div className="home-caption" style={{ backgroundImage: "url(/bg.jpg)" }}>
                <h1>Welcome to AKEA Product Database System</h1>
                <h2>It is currently {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default MainPage; // export