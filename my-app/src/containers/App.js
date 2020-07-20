import React, { Component } from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'

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
    showCockpit: true,
    auth: false,
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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


    this.setState((prevState, props) => {
      return {
        information: newInfo,
        //changeCounter: prevState.changeCounter + 1;
      }
    });
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

  authentication = () => {
    this.setState({ auth: true })
  }

  render() {


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
      infoCards = <Persons
        persons={this.state.information}
        clicked={this.onRemoveInfoFromArray}
        changed={this.onChangeInputHandler}/>

      style.backgroundColor = 'green';
      style.color = 'white';
    }





    console.log(this.state);
    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
        <AuthContext.Provider
          value={
            {
              authenticated: this.state.auth,
              login: this.authentication
            }
          }>
          {this.state.showCockpit ? <Cockpit showCards={this.state.showCards}
            informationLenght={this.state.information.length}
            toggle={this.onToggleInputHandler} /> : null}
          {infoCards}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, cssClasses.App);
