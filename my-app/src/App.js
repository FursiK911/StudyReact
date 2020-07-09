import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person'
import styled from 'styled-components'

class App extends Component {

  state = {
    information: [
      { id: '1', info: "Hello" },
      { id: '2', info: "Hi" },
      { id: '3', info: "Good day" },
      { id: '4', info: "Good evening" },
    ],
    additional_infomation: [
      { additional: "Some text" },
    ],
    showCards: false,
  }

  onClickButtonHandler = (message) => {
    console.log("Click!" + message);
    this.setState({
      information: [
        { id: '1', info: "Have are nice day!" },
        { id: '2', info: "Good bye!" },
        { id: '3', info: "Bye-bye!" },
        { id: '4', info: "See you later!" },
      ]
    });
  }

  onChangeInputHandler = (event, id) => {
    const index = this.state.information.findIndex(i => {
      return i.id === id;
    })

    const inf = {
      ...this.state.information[index],
    }

    //const info = Object.assign({}, this.state.information[index]); // alternative

    inf.info = event.target.value;

    const newInfo = [
      ...this.state.information,
    ]


    newInfo[index] = inf;


    this.setState({ information: newInfo });
  }

  onToggleInputHandler = () => {
    const doesShow = this.state.showCards;
    this.setState({ showCards: !doesShow });
  }

  onRemoveInfoFromArray = (removeIndex) => {
    //const info = this.state.information; // bad practice
    const info = this.state.information.slice(); // good practice
    //const info = [...this.state.information]; //alternative
    info.splice(removeIndex, 1);
    //this.setState(info); //Такой вариант тоже работает. Из-за ссылки??
    this.setState({ information: info });
  }

  render() {
    let btnClass = [cssClasses.button];

    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello i`m study!'));

    const style = {
      backgroundColor: 'black',
      color: 'purple',
      padding: '10px',
    }


    let infoCards = null;
    if (this.state.showCards) {
      infoCards = (
        <div>
          {this.state.information.map((inform, index) => {
            return (
              <Person
                click={() => this.onRemoveInfoFromArray(index)}
                info={inform.info}
                key={inform.id}
                changed={(event) => this.onChangeInputHandler(event, inform.id)} />
            )
          })}
        </div>
      );

      style.backgroundColor = 'green';
      style.color = 'white';
      btnClass.push(cssClasses.Red);
    }

    const classNames = [];
    if (this.state.information.length <= 2) {
      classNames.push(cssClasses.red);
    }
    if (this.state.information.length <= 1) {
      classNames.push(cssClasses.bold);
    }
    
 

    console.log(this.state);
    return (
      <div className={cssClasses.App}>
        <h1 className={classNames.join(' ')}>Component from App.js</h1>
        <button className={btnClass.join(' ')} alt={this.state.showCards} onClick={this.onToggleInputHandler}>Toggle</button>
        {
          /*this.state.showCards ? //Как вариант, но в больших конструкциях тяжело будет уследить что к чему
            <div>
              <Person
                click={this.onClickButtonHandler.bind(this, 'Click Person1')}
                info={this.state.information[0].info} />
              <Person
                click={() => this.onClickButtonHandler('Click Person2')} //лучше пользоваться bind-ом
                info={this.state.information[1].info} />
              <Person
                changed={this.onChangeInputHandler}
                info={this.state.information[2].info} />
              <Person
                info={this.state.information[3].info}>{this.state.additional_infomation[0].additional}</Person>
            </div> : null*/
          infoCards
        }
      </div>
    );
  }
}

export default App;
