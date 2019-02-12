
import {Body, BoxCenter, LeftPart, RightPart} from '../body/body-css';
import { Row } from '../utils/row-css';
import { FormGroup } from '../utils/form-group.jsx';
import { Submit } from '../utils/input-css'
import React, { Component } from 'react'

export class body extends Component {
    
    constructor() {
        super();
        this.state={
          currencyName: [],
          currencyOBJ: '',
          calcValue: ''
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

      changeSelect(event) {
          console.log(this.state.allCurrencyJSON)
          this.setState({currencyOBJ: this.state.allCurrencyJSON[event.target.value]})
      }

      calcValue(event) {
          this.setState({calcValue: this.state.currencyOBJ.bid * event.target.value})
      }
  render() {
    return (
        <Body>
        <BoxCenter>
            <LeftPart />
            <RightPart>
                    <select onLoad={this.state.request} onChange={(event)=>this.changeSelect(event)} name="" id="">
                    {this.state.currencyName.map((element, index) => {
                        return <option name={this.state.currencyName[index]}>{this.state.currencyName[index]}</option>
                    })}
                    </select>
                <Row>
                    <span>Moeda: {this.state.currencyOBJ.name}</span>
                </Row>
                <Row>
                    <span>Valor: {this.state.currencyOBJ.bid}</span>
                </Row>
                <Row>
                    <input type="text" onChange={(event) => {this.calcValue(event)}} name="" placeholder="digite o valor em reais" id=""/>
                </Row>
                    <Row>
                    <span>{this.state.calcValue}</span>
                    </Row>
            </RightPart>
        </BoxCenter>
    </Body>
    )
  }
}

export default body
