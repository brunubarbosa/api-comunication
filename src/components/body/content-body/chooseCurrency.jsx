import React, { Component } from 'react';
import Select from 'react-select';
import { TitleForm } from '../../../css/body'

export default class ChooseCurrency extends Component {
    constructor(props) {
        super(props)
        this.state = {options: [{value: '', label: 'selecione'}]}
      }
      componentWillReceiveProps(nextProps) {
        if(nextProps.currencyNames != this.props.currencyNames){
          this.props.currencyNames.map((element, index) => {
            this.setState({options: [...this.state.options, {value: element, label: element}]})
          })
        }

      }
  render() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <TitleForm fontSize={1.3}>Selecione a moeda</TitleForm>
          <div style={{width: '300px'}}>
          <Select onChange={(event)=> {this.props.changeSelect(event)}} options={this.state.options}/>
        </div>
        </div>
    )
  }
}
