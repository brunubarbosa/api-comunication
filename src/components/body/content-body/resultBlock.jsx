import React, { Component } from 'react';
import { Input } from '../../../css/input';
import { Row } from '../../../css/row';
import { TitleForm } from '../../../css/body';

export class ResultBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Row>
            <TitleForm fontSize={1}>Moeda: {this.props.currencyOBJOne ? this.props.currencyOBJOne.name : ''}</TitleForm>
        </Row>
        <Row>
            <TitleForm fontSize={1}>Valor: {this.props.currencyOBJOne ? this.props.currencyOBJOne.bid : ''}</TitleForm>
        </Row>
        <Row>
            <Input value={this.props.valueInputOne}
            onChange={(event) => {this.props.resultConversion(event)}}
            type={'text'}
            Placeholder={'Digite o valor em reais'} />
        </Row>
        <Row>
            {this.props.valueInputOne ? <TitleForm fontSize={1}>{this.props.ResultConversion }</TitleForm> : ''}
        </Row>
      </div>
    )
  }
}

export default ResultBlock
