import React, { Component } from 'react'
import ReactChartkick, { LineChart, AreaChart } from 'react-chartkick'
import Chart from 'chart.js';
import {BtnPeriod} from '../../../css/input';
import {Row} from '../../../css/row';
import {TitleForm} from '../../../css/body';



export class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = { dataChart: '' }
    ReactChartkick.addAdapter(Chart);
    this.getPeriod = this.getPeriod.bind(this)
    this.requestDataChart = this.requestDataChart.bind(this)
    this.resetDataChart = this.resetDataChart.bind(this)
  }

  requestDataChart(event) {
    this.props.setChartsActive()
    let btnValue = event.target.value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({ allDataJson: JSON.parse(xhttp.responseText) }, (btnValue) => { this.getPeriod(btnValue) })

      }
    };
    xhttp.open("GET", `https://economia.awesomeapi.com.br/json/list/${this.props.currencyOne.code}-BRL/${btnValue}`, true);
    xhttp.send();
  }

  resetDataChart() {
    console.log('aaaa')
    this.setState({dataChart: ''})
  }


  getPeriod() {
    let readyData = [];
    let amount = this.state.allDataJson.length;

    for (let i = 0; i < amount; i++) {
      if (this.state.allDataJson[i].timestamp.length == 13) {
        var timestamp = this.state.allDataJson[i].timestamp * 1
      } else {
        var timestamp = this.state.allDataJson[i].timestamp * 1000

      }
      var date = new Date(timestamp);
      readyData = [...readyData, [date, this.state.allDataJson[i].bid]]
    }
    this.setState({ dataChart: readyData })
  }

  componentWillUpdate(nextProps) {
    if(this.props.chartsActive != nextProps.chartsActive) {
      console.log(nextProps.chartsActive)
      if(!nextProps.chartsActive) {
        this.setState({dataChart: ''})
      }
    }
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TitleForm fontSize={1}>Ver gráfico de:</TitleForm>
        </Row>
       <Row style={{display: 'flex', justifyContent: 'center'}}>
       <BtnPeriod onClick={(event) => { this.requestDataChart(event) }} value={10}>10</BtnPeriod>
        <BtnPeriod onClick={(event) => { this.requestDataChart(event) }} value={10} value={20}>20</BtnPeriod>
        <BtnPeriod onClick={(event) => { this.requestDataChart(event) }} value={10} value={30}>30</BtnPeriod>
        <BtnPeriod onClick={(event) => { this.requestDataChart(event) }} value={10} value={40}>40</BtnPeriod>
        <BtnPeriod onClick={(event) => { this.requestDataChart(event) }} value={10} value={50}>50</BtnPeriod>
       </Row>
        </div>
        {this.props.chartsActive ? <AreaChart prefix="R$" label={['Valor']} width="800px" height="200px" data={this.state.dataChart} /> : ''}
      </div>
    )
  }
}

export default Charts
