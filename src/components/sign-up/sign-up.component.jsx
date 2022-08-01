import { useState } from 'react';
import { connect } from 'react-redux';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';
// Styled Component
import { 
    SignUpContainer, TitleContainer, 
    CustomButtonContainer 
} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    // state properties
    const { displayName, email, password, confirmPassword } = userCredentials;

    // handle our form submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert(`Password don't match`);
        }

        signUpStart({ displayName, email, password })
    }

    // handle our input change
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return(
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text'
                    value={displayName}
                    onChange={handleChange}
                    required
                    label='Dispaly Name'
                />
                <FormInput 
                    name='email'
                    type='email'
                    value={email}
                    onChange={handleChange}
                    required
                    label='Email'
                />
                <FormInput 
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    required
                    label='Password'
                />
                <FormInput 
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                    label='Confirm Password'
                />
                <CustomButtonContainer
                 type='submit'
                 as={CustomButton}
                 bgColor="#000"
                 border="none"
                 color="#fff"
                 >Sign Up</CustomButtonContainer>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        signUpStart: (userCredentials) => {
            return(dispatch(signUpStart(userCredentials)));
        }
    });
}

export default connect(null, mapDispatchToProps)(SignUp);