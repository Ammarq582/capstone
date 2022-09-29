
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import './sign-up-form.styles.scss';

const defaultFormFields ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}




const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName})    
            resetFormFields();
        } catch(err) {
            if(err.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use');
            } else {
                console.log('user creation encounterd an error');
            }

            
        }
        
                
    }


    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                />
                <FormInput
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                    label='Email'
                />
                <FormInput
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                    label='Password'
                />
                <FormInput
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                />
            
                <Button buttonType='google' type='submit'>Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUpForm;