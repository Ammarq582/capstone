// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';



import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.jsx';
import { AuthenticationContainer } from './authentication.styles.jsx';


const Authentication = () => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();
    // }, []);

    

   

    return (
        <AuthenticationContainer>
            
            {/* <button onClick={logGoogleUser}>Sign In with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
            <SignInForm/>
            <SignUpForm/>
            
        </AuthenticationContainer>
    )
}

export default Authentication;