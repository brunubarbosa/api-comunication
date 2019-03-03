import React, { Component } from 'react';
import Select from 'react-select';

export default class ChooseCurrency extends Component {
    constructor(props) {
        super(props)
        this.state = {options: [{value: '', label: 'selecione'}]}
      }
      componentWillReceiveProps(nextProps) {
        this.props.currencyNames.map((element, index) => {
          this.setState({options: [...this.state.options, {value: element, label: element}]})
        })

      }
  render() {
    return (
        <div style={{width: '100px'}}>
          <Select onChange={(event)=> {this.props.changeSelect(event)}} options={this.state.options}/>
        </div>
    )
  }
}
