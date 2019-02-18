import React, { Component } from 'react'

export default class ChooseCurrency extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div>
        <select onLoad={this.props.request} onChange={(event)=>this.props.changeSelect(event)} name="selectOne" id="">
            <option value="default">Selecione uma moeda</option>
                {this.props.currencyNames.map((element, index) => {
                return <option  name={this.props.currencyNames[index]}>
                    {this.props.currencyNames[index]}
                </option>
                })}
        </select>
      </div>
    )
  }
}
