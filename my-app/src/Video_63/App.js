import React, { Component } from 'react'
import Validation from './Validation'
import Char from './Char'


class App extends Component {

    state = {
        userInput: '',
    }

    onChangeInputHandler = (event) => {
        let oldInput = this.state.userInput;
        oldInput = event.target.value;
        this.setState({userInput: oldInput})
    }

    onClickHandler = (index) => {
        let text = this.state.userInput.split('');
        text.splice(index, 1);
        const updateText = text.join('');
        this.setState({userInput: updateText});
    }

    render() {

        const charList = this.state.userInput.split('').map((ch, index) => {
            return (
                <Char character={ch} click={() => this.onClickHandler(index)}/>
            );
        });


        return (
            <div className="app">
                <input type="text" value={this.state.userInput} onChange={(event) => this.onChangeInputHandler(event)}/>
                <p>{this.state.userInput}</p>
                <Validation 
                inputLenght={this.state.userInput.length} />
                {charList}
            </div>
        )
    }
}

export default App;