import React, { Component } from 'react';
import './App.css';
import './components/select/SelectContainer';
import './components/report/ReportContainer';
import SelectContainer from './components/select/SelectContainer';
import ReportContainer from './components/report/ReportContainer';

/*
  Structure:
  App.js -  state = {user: ''}
            userClick()
  SelectContainer.js
    Select.js
  ReportContainer.js
    Report.js
*/

class App extends Component {

  constructor() {
    super();
    var _this = this;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minerva</h1>
        </header>
        <p className="app-body">
          <SelectContainer/>
          <ReportContainer/>
        </p>
      </div>
    );
  }
}

export default App;
