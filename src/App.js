import React from 'react';
import Header from './components/header/header';
import '../src/index.css';
import Body from './components/body/body';


// document.addEventListener('DOMContentLoaded', (event) => {
//   document.getElementById('submit').addEventListener('click', () => request())
// })


class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Header>
        </Header>
        <Body/>
        </React.Fragment>
    )
  }
}

export default App;