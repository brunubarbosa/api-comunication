import React from 'react';
import { Input, Form_Group, Label } from '../utils/input-css';

export const FormGroup = (props) => {
    return (
        <div>
            <Form_Group>
                <Label For={props.Name}>
                    {props.Label}
                </Label>
                <Input Type={props.Type} Name={props.Name}/>
            </Form_Group>
        </div>
    )
}

export default FormGroup;