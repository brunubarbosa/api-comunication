import React, { Component } from 'react'
import ReactChartkick, { LineChart, AreaChart } from 'react-chartkick'
import Chart from 'chart.js';


export class Charts extends Component {
  constructor(props) {
    super();
    this.state = { dataChart: '' }
    ReactChartkick.addAdapter(Chart);
    this.getPeriod = this.getPeriod.bind(this)
    this.requestDataChart = this.requestDataChart.bind(this)
  }

  requestDataChart(event) {
    let btnValue = event.target.value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.setState({ allDataJson: JSON.parse(xhttp.responseText) }, (btnValue) => { this.getPeriod(btnValue) })

      }
    };
    xhttp.open("GET", `https://economia.awesomeapi.com.br/json/list/USD-BRL/${btnValue}`, true);
    xhttp.send();
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

  render() {
    return (
      <div>
        {this.state.dataChart ?
          <AreaChart prefix="R$" label={['vvvvv']} width="700px" height="150px" data={this.state.dataChart} /> : ''
        }
        <button onClick={(event) => { this.requestDataChart(event) }} value={10}>10</button>
        <button onClick={(event) => { this.requestDataChart(event) }} value={10} value={20}>20</button>
        <button onClick={(event) => { this.requestDataChart(event) }} value={10} value={30}>30</button>
        <button onClick={(event) => { this.requestDataChart(event) }} value={10} value={40}>40</button>
        <button onClick={(event) => { this.requestDataChart(event) }} value={10} value={50}>50</button>
      </div>
    )
  }
}

export default Charts
