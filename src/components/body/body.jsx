import React from 'react';
import {Body, BoxCenter, LeftPart, RightPart} from '../body/body-css';
import { Row } from '../utils/row-css';
import { FormGroup } from '../utils/form-group.jsx';
import { Submit } from '../utils/input-css'

export const body = (props) => {
    return(
        <Body>
            <BoxCenter>

                <LeftPart />
                <RightPart>
                <form action={'teste'}>
                    <Row style={{justifyContent: 'space-between'}}>
<FormGroup Type={'text'} Label={'Digite o nome da cidade'} Name_For={'nome1'}/>
<FormGroup Type={'text'} Label={'Digite o nome da cidade'} Name_For={'nome2'}/>
<FormGroup Type={'text'} Label={'Digite o nome da cidade'} Name_For={'nome3'}/>
                    </Row>
                    <Row>
                        <span>Um: </span>
                    </Row>
                    <Row>
                        <span>Dois: </span>
                    </Row>
                    <Row>
                        <Submit>cuuuuuu</Submit>
                    </Row>
                </form>
                </RightPart>
            </BoxCenter>
        </Body>
    )
}

export default body;