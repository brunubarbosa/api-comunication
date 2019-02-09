import React from 'react';
import Header from './components/header/header';
import '../src/index.css';
import Body from './components/body/body';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <React.Fragment>
          <Header>
          aaaaa
        </Header>
        <Body>

        </Body>
        </React.Fragment>
    )
  }
}

export default App;