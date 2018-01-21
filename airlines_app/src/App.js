import React, { Component } from 'react';
//import { Tabs, TabList } from 'react-tabtab';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to AirLines Rating</h1>
        </header>
       <p className="App-intro">

        </p>

        <MuiThemeProvider>
          <div>

           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

             <RaisedButton label="Register" primary={true} style={style} onclick={(event) => this.registration(event)}/>
             
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};

export default App;
