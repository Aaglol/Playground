import {FormGroup} from '@/components/FormGroup';
import { useState } from 'react';

import { AppBody } from '@/components/layout/AppBody';
import { Button } from '@/components/Button';
import { useLoginMutation } from '@/store/services/user';

export const PAGE_LOGIN = 'PAGE_LOGIN';

export default function Login() {
    interface FormRegisterDataTypes { username: 'Robin', password: '', email: ''}
    
    const formData: FormRegisterDataTypes = {username: 'Robin', password: '', email: ''};
    const [formDataFormatted, setFormDataFormatted] = useState<FormRegisterDataTypes>(formData);

    const [
        loginUser,
        {isLoading},
    ] = useLoginMutation();

    const handleSubmitRegister: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('loginUser', isLoading);

        try {
            await loginUser(formDataFormatted).unwrap();
        } catch (e) {
            console.log('failed', e);
        }
    };

    const formInputs = [{
        title: 'Passord',
        name: 'password',
        type: 'password',
        attribute: 'current-password',
    }];

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const newData = {...formDataFormatted, [name]: value};
        setFormDataFormatted(newData);
    };

    return (
        <AppBody page={PAGE_LOGIN}>
            <div className="container">
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
            </div>
        </AppBody>
    );
};
