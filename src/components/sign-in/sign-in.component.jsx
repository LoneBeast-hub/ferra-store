import { connect } from 'react-redux';
import { useState } from 'react';
// components import
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
// styled Component
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    // state properties
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // pass email and password into our emailSignInStart payload
        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        // destructure out the name and value of an input field
        const { name, value } = event.target;

        // assign value to name in state
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return(
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                    name='email' 
                    type="email" 
                    value={email} 
                    required 
                    label='Email'
                    handleChange={handleChange}
                    />
                <FormInput
                    name='password' 
                    type="password" 
                    value={password} 
                    required 
                    label='Password'
                    handleChange={handleChange}
                    />

                    <ButtonsContainer>
                    <CustomButton
                     type="submit"
                     bgColor="#000"
                     color="#fff"
                     border="none"
                    >SIGN IN</CustomButton>
                    <CustomButton
                     type="button" 
                     onClick={googleSignInStart} 
                     isGoogleSignIn
                    >SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        googleSignInStart: () => {
            dispatch(googleSignInStart())
        },
        emailSignInStart: (email, password) => {
            dispatch(emailSignInStart({email, password}))
        }
    })
}

export default connect(null, mapDispatchToProps)(SignIn)