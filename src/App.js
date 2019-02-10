import React from 'react';
import Header from './components/header/header';
import '../src/index.css';
import Body from './components/body/body';


// document.addEventListener('DOMContentLoaded', (event) => {
//   document.getElementById('submit').addEventListener('click', () => request())
// })


class App extends React.Component {
  constructor() {
    super();
    this.state={
      currencyName: []
    }
    this.processNewCurrency = this.processNewCurrency.bind(this);
    this.request = this.request.bind(this);
    this.request()
  }
  

  request() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        
        this.processNewCurrency(xhttp.responseText)
        }
    };
    xhttp.open("GET", "https://economia.awesomeapi.com.br/all", true);
    xhttp.send();
  }

  processNewCurrency(content) {
    let allCurrencyJSON = JSON.parse(content)
    for(let key in allCurrencyJSON) {
        this.setState({currencyName: this.state.currencyName.concat(key)})
    }
    this.setState({allCurrencyJSON: allCurrencyJSON})
  }
 

  render() {
    return (
        <React.Fragment>
          <Header>
        </Header>
        <Body request={this.request} currencyName={this.state.currencyName} allCurrency={this.state.allCurrency} activeCurrency={this.state.activeCurrency}/>
        </React.Fragment>
    )
  }
}

export default App;