import React from 'react';
import {Body, BoxCenter, LeftPart, RightPart} from '../body/body-css';
import { Input } from '../utils/input-css';
import { Row } from '../utils/row-css';
import { Label } from '../utils/label-css'
import { FormGroup } from '../utils/form-group'

export const body = (props) => {
    return(
        <Body>
            <BoxCenter>
                <LeftPart>

                </LeftPart>
                <RightPart>
                    <Row>
                        <FormGroup Type={'text'} Label={'Digite o nome da cidade'} Name={'teste'}/>
                    </Row>
                </RightPart>
            </BoxCenter>
        </Body>
    )
}

export default body;