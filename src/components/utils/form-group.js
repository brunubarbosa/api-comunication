import React from 'react';
import { Input, Form_Group, Label } from '../utils/input-css';

export const FormGroup = (props) => {
    return (
        <div>
            <Form_Group>
                <Label {...props}>
                    {props.Name_For}
                </Label>
                <Input Type={props.Type} Name_For={props.Name_For}/> 
            </Form_Group>
        </div>
    )
}

export default FormGroup;