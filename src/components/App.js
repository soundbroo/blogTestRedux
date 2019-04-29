import React, { Component } from 'react'
import '../App.css'
import Sidebar from '../Sidebar'
import Main from '../Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Sidebar />
          <Main />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
