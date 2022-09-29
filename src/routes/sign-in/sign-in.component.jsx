import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'


const SignIn = () => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }

   

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
            <SignUpForm/>
        </div>
    )
}

export default SignIn;