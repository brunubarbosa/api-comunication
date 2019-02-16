
import {Body, BoxCenter, LeftPart, RightPart, TitleForm} from '../body/body-css';
import { Row } from '../utils/row-css';
import { FormGroup } from '../utils/form-group.jsx';
import { Submit, Input } from '../utils/input-css'
import React, { Component } from 'react'
import {LogoText} from '../header/index-css';

export class body extends Component {
    
    constructor() {
        super();
        this.state={
          currencyNames: [],
          currencyOBJOne: '',
          ResultConversion: '',
          valueInputOne: 0
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
            this.setState({currencyNames: this.state.currencyNames.concat(key)})
        }
        this.setState({allCurrencyJSON: allCurrencyJSON})
      }

      changeSelect(event) {
          console.log(this.state.allCurrencyJSON)
          this.setState({currencyOBJOne: this.state.allCurrencyJSON[event.target.value]})
      }

      ResultConversion(event) {
        if(parseInt(event.target.value) && event.target.value !== 'default') {

          this.setState({ResultConversion: this.state.currencyOBJOne.bid * event.target.value,
            valueInputOne: event.target.value})
        } else {
          this.setState({ResultConversion: 0, valueInputOne: ''})


        }

      }
  render() {
    return (
        <Body>
        <BoxCenter>
            <LeftPart />
            <RightPart>
                  <Row style={{justifyContent: 'center'}}>
                    <TitleForm fontSize={2}>Converta sua moeda</TitleForm>
                  </Row>
                    <select onLoad={this.state.request} onChange={(event)=>this.changeSelect(event)} name="" id="">
                    <option value="default">Selecione uma moeda</option>
                    {this.state.currencyNames.map((element, index) => {
                        return <option name={this.state.currencyNames[index]}>{this.state.currencyNames[index]}</option>
                    })}
                    </select>
                    
                <Row>
                  {this.state.currencyOBJOne ? <span>Moeda: {this.state.currencyOBJOne.name}</span> : ''}
                    
                </Row>
                <Row>
                  {this.state.currencyOBJOne ? <span>Moeda: <span>Valor: {this.state.currencyOBJOne.bid}</span></span> : ''}
                    
                </Row>
                <Row>
                  {this.state.currencyOBJOne ?
                    <Input value={this.state.valueInputOne != 0 ? this.state.valueInputOne : ''} onChange={(event) => {this.ResultConversion(event)}} type={'text'} Placeholder={'Digite o valor em reais'}></Input> : ''}
                    
                    
                </Row>
                    <Row>
                    {this.state.currencyOBJOne ?
                    <span>{this.state.ResultConversion}</span> : ''}
                    </Row>
            </RightPart>
        </BoxCenter>
    </Body>
    )
  }
}

export default body
