import React, { Component } from 'react'
import InputWithParagraph from './TextInputWithParagraph'
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {

    state = {
        information: [
            { id: 1, text: 'Some_Text1'},
            { id: 2, text: 'Some_Text2'},
            { id: 3, text: 'Some_Text3'},
            { id: 4, text: 'Some_Text4'},
        ],
    }


    ChangeTextHandler = (event, index) => {
        const arrayIndex = this.state.information.findIndex(i => {
            return i.id === index;
        });

        const element = {
            ...this.state.information[arrayIndex]
        };

        element.text = event.target.value;

        const newInformation = [
            ...this.state.information
        ];

        newInformation[arrayIndex] = element;

        this.setState({ information: newInformation })
    }

    onRenderCharComponents = (id, text) => {
        const charsArray = text.split('');
        
        let charComponents = null;

        charComponents = charsArray.map((letter, index) => {
            return (
                    <CharComponent
                    char={letter}
                    click={() => this.onClickCharComponents(id, index)}/>
            )
        });
        return charComponents;
    }

    onClickCharComponents = (elementId, letterIndex) => {
        const arrayIndex = this.state.information.findIndex(i => {
            return i.id === elementId;
        });

        const element = {
            ...this.state.information[arrayIndex]
        };
        console.log(element.text[letterIndex]);
        let text = element.text;
        element.text =  text.slice(0, letterIndex) + text.slice(letterIndex + 1);
        console.log(element);
        const newInformation = [
            ...this.state.information
        ];

        newInformation[arrayIndex] = element;

        this.setState({ information: newInformation })
    }

    render() {

        let inputs = null;
        let charComponents = null;
        inputs = this.state.information.map((info, index) => {
            charComponents = this.onRenderCharComponents(info.id, info.text);
            return (
                <div className="inputs">
                    <InputWithParagraph
                        changed={(event) => this.ChangeTextHandler(event, info.id)}
                        text={info.text} />
                    <ValidationComponent
                        key={info.id}
                        count={info.text.length} />
                    {charComponents}
                </div>

            )
        })


        return (
            <div className="App">
                {inputs}
            </div>
        );
    }
}

export default App;