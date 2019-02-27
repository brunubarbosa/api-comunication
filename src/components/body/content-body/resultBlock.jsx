import React, { Component } from 'react';
import { Input } from '../../utils/input-css';
import { Row } from '../../utils/row-css';

export class ResultBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Row>
            <span>Moeda: {this.props.currencyOBJOne.name}</span>
        </Row>
        <Row>
            <span>Valor: {this.props.currencyOBJOne.bid}</span>
        </Row>
        <Row>
            <Input value={this.props.valueInputOne}
            onChange={(event) => {this.props.resultConversion(event)}}
            type={'text'}
            Placeholder={'Digite o valor em reais'} />
        </Row>
        <Row>
            <span>{this.props.ResultConversion }</span>
        </Row>
      </div>
    )
  }
}

export default ResultBlock
