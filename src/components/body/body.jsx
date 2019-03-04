
import {Body, BoxCenter, LeftPart, RightPart, TitleForm} from '../../css/body';
import { Row } from '../../css/row';
import { FormGroup } from '../utils/form-group.jsx';
import { Submit, Input } from '../../css/input'
import React, { Component } from 'react'
import {LogoText} from '../../css/header';
import ChooseCurrency from './content-body/chooseCurrency';
import { relative, isAbsolute } from 'path';
import ResultBlock from './content-body/resultBlock';
import Charts from './content-body/charts';
import axios from 'axios';


export class body extends Component {
    
    constructor() {
        super();
        this.state={
          currencyNames: [],
          ResultConversion: '',
          valueInputOne: '',
          currencyOBJOne: '',
          isResultActive: false,
          chartsActive: false
        }
        this.processNewCurrency = this.processNewCurrency.bind(this);
        this.request = this.request.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.resultConversion = this.resultConversion.bind(this)
        this.setChartsActive = this.setChartsActive.bind(this)
        
        this.request()
      }

      setChartsActive() {
        this.setState({chartsActive: true})
      }
      
      request() {
        var config = {
          onUploadProgress: function(progressEvent) {
            console.log('aaa')
            var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            console.log(percentCompleted)
          }
        };

        axios.get('https://economia.awesomeapi.com.br/all', config).then(response => {
          this.processNewCurrency(response.data)
        })
      }
    
      processNewCurrency(content) {
        for(let key in content) {
          this.setState({currencyNames: [...this.state.currencyNames, key]})
        }
        this.setState({allCurrencyJSON: content})
      }

      componentDidUpdate (prevProps, prevState) {
        if(this.state.currencyOBJOne != prevState.currencyOBJOne) {
        }
      }
      
      changeSelect(event) {
        this.setState({chartsActive: false})

        if(event.label !== 'selecione') {
          this.setState({isResultActive: true})
            this.setState({currencyOBJOne: this.state.allCurrencyJSON[event.value]})
          let result = this.state.currencyOBJOne.bid * this.state.valueInputOne
          this.setState({ResultConversion: result.toLocaleString('pt-BR')})
          } else {
            this.setState({isResultActive: false})
          }
      }

      resultConversion(event) {
        if(!isNaN(event.target.value)) {
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
                <div >
                <Row style={{justifyContent: 'center'}}>
                  <TitleForm fontSize={2}>Converta sua moeda</TitleForm>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
                <ChooseCurrency  {...this.state} changeSelect={this.changeSelect}/>
                </Row>
                <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  {this.state.isResultActive ? <ResultBlock {...this.state} resultConversion={this.resultConversion} /> : ''}
                </Row>
                </div>
                <Row style={{height: '100%', display: 'flex', alignItems: 'space between', justifyContent: 'center'}}>
                  {this.state.isResultActive ? <Charts currencyOne={this.state.currencyOBJOne} chartsActive={this.state.chartsActive} setChartsActive={this.setChartsActive} /> : ''}
                </Row>
            </RightPart>
        </BoxCenter>
    </Body>
    )
  }
}

export default body

