import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    googleSignInStart,
    emailSignInStart,
    signUpStart
 } from '../../store/user/user.action';
 import {
    DarkVariantButton,
    ImageContainer,
    LeftDiv,
    PlainTextButton,
    RoundedBorderButton,
    RoundedBorderInput,
    SignInContainer,
    SignInSection,
    SignUpSection,
    UserSignInContainer,
    UserSignUpContainer
    } from './sign-in-page.styles';

import { images } from '../../utils/load-images/load-images.utils';
import DynamicIcon from '../../components/dynamic-icon.component';
import { selectCurrentUser } from '../../store/user/user.selector';

const defaultFormFields = {
    signIn: {
        email: '',
        password: '',
    },
    signUp: {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
};



const SignInPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [signUpForm, setSignUpForm] = useState(location.hash === '#sign-up');
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        if (currentUser) {
        navigate('/');
        }
    }, [currentUser, navigate]);


    const getDefaultFormFields = () => {
        return signUpForm ? defaultFormFields.signUp : defaultFormFields.signIn;
      };
    const [formFields, setFormFields] = useState(getDefaultFormFields());
    const {
        displayName = undefined,
        email = undefined,
        password = undefined,
        confirmPassword = undefined,
    } = formFields || {};


    useEffect(() => {
        const hash = location.hash;
        setSignUpForm(hash === '#sign-up');
    }, [location.hash]);

    useEffect(() => {
      const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
          if (signUpForm) {
            handleSignUpSubmit(e);
          } else {
            handleSignInSubmit(e);
          }
        }
      };
    
      document.addEventListener('keydown', keyDownHandler);
    
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, [formFields]); 

    const resetFormFields = () => {
        setFormFields(getDefaultFormFields());
      };
    
      const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
      };
    
      const handleSignInSubmit = async (e) => {
        e.preventDefault();
        try {
          dispatch(emailSignInStart(email.toLowerCase(), password));
          resetFormFields();
        } catch (error) {
          console.log('user sign in failed', error);
        }
      };

      function toTitleCase(name) {

        return name
          .toLowerCase()                    
          .split(/\s+/)                    
          .map(word =>                       
            word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(' ');                       
      }

      const handleSignUpSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword){
          alert("passwords do not match");
          return;
        }
    
        try {
          dispatch(signUpStart(email.toLowerCase(), password, toTitleCase(displayName)));
          resetFormFields();
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            alert("Cannot create user, email already in use");
          } else {
            console.log("user creation encountered an error", error);
          }
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };

    const onToggle = () => {
        const newHash = signUpForm ? 'sign-in' : 'sign-up';
        setSignUpForm(newHash === 'sign-up');
        setFormFields(getDefaultFormFields());
        navigate(`#${newHash}`);
    };


    return (
        <SignInContainer>
            <LeftDiv>
                <SignUpSection>
                    <PlainTextButton disabled={!signUpForm} onClick={onToggle}>Have an account? Sign in</PlainTextButton>
                     <UserSignUpContainer onSubmit={handleSignUpSubmit}> 
                        <h2>Get started</h2>
                        <p>Enter your personal details</p>
                        <RoundedBorderButton disabled={!signUpForm} onClick={signInWithGoogle}><DynamicIcon iconName='Google'/>Sign up with Google</RoundedBorderButton>
                        <div><hr />OR<hr /></div>
                        <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="text" placeholder='First and Last Name' name='displayName' value={displayName} required/>
                        <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="email" placeholder='Email' name='email' value={email} required/>
                        <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="password" placeholder='Password' name='password' value={password} required/>
                        <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="password" placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} required/>
                        <div>
                            <input type="checkbox" name="" id="keepSignedIn" />
                            <label htmlFor="keepSignedIn">I accept all terms and conditions</label>
                        </div>
                        <DarkVariantButton disabled={!signUpForm} type='submit'>Sign in</DarkVariantButton>
                    </UserSignUpContainer>
                </SignUpSection>
                <ImageContainer translateright={signUpForm}>
                    <img src={images['auth-page-img.jpg']}/>
                </ImageContainer>
            </LeftDiv>
            <SignInSection>
                <PlainTextButton disabled={signUpForm} onClick={onToggle}>Don't have an account? Sign up</PlainTextButton>
                <UserSignInContainer onSubmit={handleSignInSubmit}>
                    <h2>Welcome back</h2>
                    <p>Enter your student account details</p>
                    <RoundedBorderButton disabled={signUpForm} onClick={signInWithGoogle}><DynamicIcon iconName='Google'/>Log in with Google</RoundedBorderButton>
                    <div><hr />OR<hr /></div>
                    <RoundedBorderInput disabled={signUpForm} onChange={handleChange} type="text" placeholder='Email or username' name='email' value={email}/>
                    <RoundedBorderInput disabled={signUpForm} onChange={handleChange} type='password' placeholder='Password' name='password' value={password}/>
                    <div>
                        <input disabled={signUpForm} type="checkbox" name="" id="keepSignedIn" />
                        <label htmlFor="keepSignedIn">Keep me signed in</label>
                        <PlainTextButton >Forgot password</PlainTextButton>
                    </div>
                    <DarkVariantButton disabled={signUpForm} type='submit'>Sign in</DarkVariantButton>
                </UserSignInContainer>
            </SignInSection>
        </SignInContainer>
    )
}

export default SignInPage;