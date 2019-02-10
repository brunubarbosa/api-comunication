import React from 'react';
import {Body, BoxCenter, LeftPart, RightPart} from '../body/body-css';
import { Row } from '../utils/row-css';
import { FormGroup } from '../utils/form-group.jsx';
import { Submit } from '../utils/input-css'


const getValueCurrency = () => {
        console.log()
}

export const body = (props) => {
    

    
    return(
        <Body>
            <BoxCenter>

                <LeftPart />
                <RightPart>
                
                    <Row style={{justifyContent: 'space-between'}}>
                        <select onLoad={props.request}  name="" id="">

                        {props.currencyName.map((element, index) => {
                            return <option name={props.currencyName[index]}>{props.currencyName[index]}</option>
                        })}
                        
                        </select>
                    </Row>
                    <Row>
                        <span>Um: {}</span>
                    </Row>
                    <Row>
                        <span>Dois: </span>
                    </Row>
                    <Row>
                        <button onClick={props.request}>Enviar</button>
                    </Row>
                </RightPart>
            </BoxCenter>
        </Body>
    )
}

export default body;