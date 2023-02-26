import {FormGroup} from '@/components/FormGroup';
import { useState } from 'react';

import { useRequesthandler } from '@/hooks/useRequesthandler';
import { useDispatch } from 'react-redux';

import { isLoggedInUpdated, userLogin, currentUserUpdated } from '@/store/slices/appSlice';
import { checkIfLoggedIn } from '@/utils/helpers/auth';
import { AppBody } from '@/components/layout/AppBody';
import { Button } from '@/components/Button';

export const PAGE_LOGIN = 'PAGE_LOGIN';

export default function Login() {
    interface FormRegisterDataTypes { username: 'Robin', password: '', email: ''}

    const dispatch = useDispatch();
    
    const formData: FormRegisterDataTypes = {username: 'Robin', password: '', email: ''};
    const [formDataFormatted, setFormDataFormatted] = useState<FormRegisterDataTypes>(formData);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (showRegisterForm) {
            await useRequesthandler('http://localhost:8081/', 'user/create', 'POST', formDataFormatted).then((response) => {                
                if (response) {
                    setShowRegisterForm(false);

                    return checkIfLoggedIn();
                }
            });
        } else {
            await dispatch(userLogin(formDataFormatted)).then((response) => {
                if (response.payload) {
                    dispatch(currentUserUpdated(response.payload));
                    dispatch(isLoggedInUpdated(true));
                }
            });
        }
    };

    const formInputs = showRegisterForm ? [
        {
            title: 'Brukernavn',
            name: 'username',
            type: 'text',
            attribute: 'username',
        },
        {
            title: 'Passord',
            name: 'password',
            type: 'password',
            attribute: 'current-password',
        },
        {
            title: 'E-post',
            name: 'email',
            type: 'email',
            attribute: 'email',
        },
    ] : [
        {
            title: 'Passord',
            name: 'password',
            type: 'password',
            attribute: 'current-password',
        },
    ];

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
                        {!showRegisterForm ? 'Logg inn' : 'Registrer'}
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
