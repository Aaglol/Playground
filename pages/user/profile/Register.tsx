import {FormGroup} from '@/components/FormGroup';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { useRegisterMutation } from '@/store/services/user';
import { FormRegisterDataTypes } from '@/store/types';

export const PAGE_REGISTER = 'PAGE_REGISTER';

export default function Register() { 
    
    const formData: FormRegisterDataTypes = {username: 'Robin', password: '', email: ''};
    const [formDataFormatted, setFormDataFormatted] = useState<FormRegisterDataTypes>(formData);

    const [register] = useRegisterMutation();

    const handleSubmitRegister: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await register(formDataFormatted).unwrap();
        } catch (e) {
            console.log('failed', e);
        }
    };

    const formInputs = [
        {
            title: 'Brukernavn',
            name: 'username',
            type: 'username',
            attribute: 'username',
            className: '',
        },
        {
            title: 'Passord',
            name: 'password',
            type: 'password',
            attribute: 'current-password',
            className: '',
        },
        {
            title: 'E-mail',
            name: 'email',
            type: 'email',
            attribute: 'email',
            className: '',
        },
    ];

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const newData = {...formDataFormatted, [name]: value};
        setFormDataFormatted(newData);
    };

    return (
        <form className="form bg-dark" onSubmit={(e) => handleSubmitRegister(e)}>
            <div className="form-title">
                Register bruker
            </div>
            <hr className="mb-20" />
            {formInputs.map((input, key) => (
                <FormGroup
                    data={input}
                    key={key}
                    inputOnChange={inputOnChange}
                />
            ))}
            
            <div className="form-footer">
                <Button
                    title="Submit"
                    onClick={handleSubmitRegister}
                    type='success'
                />
            </div>
        </form>
    );
};
