import React, { Component } from 'react';
import './App.css';

import UserInput from './Video_51/UserInput/userInput';
import UserOutput from './Video_51/UserOutput/userOutput';

class App extends Component{

    state = {
        username: "Dima",
    }

    onChangeNameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render(){
        return (
            <div className="App">
                <ol>
                    <li>Text1</li>
                    <li>Text2</li>
                    <li>Text3</li>
                    <li>Text4</li>
                    <li>Text5</li>
                    <li>Text6</li>
                    <li>Text7</li>
                    <li>Text8</li>
                </ol>
                <UserInput currentName={this.state.username} changed={this.onChangeNameHandler}/>
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Dmitriy"/>
                <UserOutput userName="Dmitriy"/>
            </div>
        );
    }
}

export default App;