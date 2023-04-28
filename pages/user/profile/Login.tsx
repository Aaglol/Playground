import {FormGroup} from '@/components/FormGroup';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { useLoginMutation } from '@/store/services/user';
import { FormRegisterDataTypes } from '@/store/types';

export const PAGE_LOGIN = 'PAGE_LOGIN';

export default function Login() { 
    
    const formData: FormRegisterDataTypes = {username: 'Robin', password: '', email: ''};
    const [formDataFormatted, setFormDataFormatted] = useState<FormRegisterDataTypes>(formData);

    const [login] = useLoginMutation();

    const handleSubmitRegister: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await login(formDataFormatted).unwrap();
        } catch (e) {
            console.log('failed', e);
        }
    };

    const formInputs = [{
        title: 'Passord',
        name: 'password',
        type: 'password',
        attribute: 'current-password',
        className: '',
    }];

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const newData = {...formDataFormatted, [name]: value};
        setFormDataFormatted(newData);
    };

    return (
        <form className="form bg-dark" onSubmit={(e) => handleSubmitRegister(e)}>
            <div className="form-title">
                Logg inn
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
