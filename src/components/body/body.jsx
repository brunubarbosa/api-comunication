import React from 'react';
import {Body, BoxCenter, LeftPart, RightPart} from '../body/body-css';
import { Row } from '../utils/row-css';
import { FormGroup } from '../utils/form-group';

export const body = (props) => {
    return(
        <Body>
            <BoxCenter>
                <LeftPart>

                </LeftPart>
                <RightPart>
                    <Row>
                        <FormGroup Type={'text'} Label={'Digite o nome da cidade'} Name_For={'teste'}/>
                    </Row>
                </RightPart>
            </BoxCenter>
        </Body>
    )
}

export default body;