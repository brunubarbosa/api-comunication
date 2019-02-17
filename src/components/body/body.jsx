
import {Body, BoxCenter, LeftPart, RightPart, TitleForm} from '../body/body-css';
import { Row } from '../utils/row-css';
import { FormGroup } from '../utils/form-group.jsx';
import { Submit, Input } from '../utils/input-css'
import React, { Component } from 'react'
import {LogoText} from '../header/index-css';
import ChooseCurrency from './content-body/chooseCurrency';
import { relative, isAbsolute } from 'path';
import ResultBlock from './content-body/resultBlock';

export class body extends Component {
    
    constructor() {
        super();
        this.state={
          currencyNames: [],
          ResultConversion: '',
          valueInputOne: '',
          currencyOBJOne: '',
          isResultActive: false
        }
        this.processNewCurrency = this.processNewCurrency.bind(this);
        this.request = this.request.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.resultConversion = this.resultConversion.bind(this)
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
        if(event.target.value !== 'default' && event.target.value != undefined) {
          this.setState({currencyOBJOne: this.state.allCurrencyJSON[event.target.value]})
            
            let result = this.state.currencyOBJOne.bid * this.state.valueInputOne
            this.setState({ResultConversion: result.toLocaleString('pt-BR')})
            this.setState({isResultActive: true})
          } else {
            this.setState({isResultActive: false})

          }
      }

      resultConversion(event) {
        
        if(!isNaN(event.target.value)) {
          console.log(parseInt(event.target.value))
          let result = this.state.currencyOBJOne.bid * event.target.value
          this.setState({ResultConversion: result.toLocaleString('pt-BR'),
            valueInputOne: event.target.value})
        } else {
          this.setState({ResultConversion: this.state.ResultConversion, valueInputOne: this.state.valueInputOne})


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
                <Row>
                <ChooseCurrency {...this.state} changeSelect={this.changeSelect} />
                </Row>
                <Row>
                  {this.state.isResultActive ? <ResultBlock {...this.state} resultConversion={this.resultConversion} /> : ''}
                 
                </Row>
            </RightPart>
        </BoxCenter>
    </Body>
    )
  }
}

export default body

