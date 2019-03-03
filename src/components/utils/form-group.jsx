import React from 'react';
import { Input, Form_Group, Label } from '../../css/input';


export const FormGroup = (props) => {
    return (
        <div>
            <Form_Group>
                <Label {...props}>
                    {props.Label}
                </Label>
                <Input Type={props.Type} Name_For={props.Name_For}/> 
            </Form_Group>
        </div>
    )
}

export default FormGroup;