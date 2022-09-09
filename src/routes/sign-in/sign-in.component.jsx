import {signInWithGooglePopup} from '../../utils/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase.utils';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popups</button>
        </div>
    )
}

export default SignIn;