import './sign-in-form.styles.jsx';

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';


import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase.utils';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields({...defaultFormFields})
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            

        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                case 'auth/too-many-requests':
                    alert('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later')
                    break;
            
                default:
                    console.log('There is an error while signing in: ', err);
                    break;
            }
            
            
        }
        
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={onSubmitHandler}>
                <FormInput
                label='Email'
                type='email'
                value={email}
                name='email'
                onChange={handleChange}
                required
                />
                <FormInput
                label='Password'
                type='password'
                value={password}
                name='password'
                onChange={handleChange}
                required
                />
                <ButtonsContainer>
                    <Button type='submit'>sign in</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
                

            </form>
        </SignInContainer>
        
    )
}

export default SignInForm;