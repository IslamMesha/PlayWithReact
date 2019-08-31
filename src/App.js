import React from 'react';
import './App.css';
import HelloWorld from '../src/componnents/HelloWorld'

class App extends React.Component {

  render() {
    return (
      <div><HelloWorld fullName={"Islam Muhammad Mesha"} /></div>
    )
  }
}

export default App;
