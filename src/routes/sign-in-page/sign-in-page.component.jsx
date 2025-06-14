import { useState, useEffect, useRef } from 'react';
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
    const signUpRef = useRef(null);
    const signInRef = useRef(null);
    const [signUpForm, setSignUpForm] = useState(location.hash === '#sign-up');
    const [signUpDivSize, setSignUpDivSize] = useState(null);
    const [signInDivSize, setSignInDivSize] = useState(null);
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        if (currentUser) {
        navigate('/');
        }
    }, [currentUser, navigate]);
    useEffect(() => {
      if (signUpRef.current) {
          setSignUpDivSize(signUpRef.current.offsetWidth);
      }
      if (signInRef.current) {
          setSignInDivSize(signInRef.current.offsetWidth);
      }
  }, [signUpForm]);


    useEffect(() => {
      const handleResize = () => {
        if (signUpRef.current) {
          setSignUpDivSize(signUpRef.current.offsetWidth);
        }
        if (signInRef.current) {
          setSignInDivSize(signInRef.current.offsetWidth);
        }
      };
  
      window.addEventListener('resize', handleResize);

      return () => { 
        window.removeEventListener('resize', handleResize);
      };
    }, [signUpForm]);

    

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
    if (signUpRef.current) {
        setSignUpDivSize(signUpRef.current.offsetWidth);
    }
    if (signInRef.current) {
        setSignInDivSize(signInRef.current.offsetWidth);
    }
}, []);


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

    // const onToggle = () => {
    //     const newHash = signUpForm ? 'sign-in' : 'sign-up';
    //     const newSignInDivSize = signUpDivSize;
    //     const newSignUpDivSize = signInDivSize;
    //     setSignInDivSize(newSignInDivSize);
    //     setSignUpDivSize(newSignUpDivSize);
    //     setSignUpForm(newHash === 'sign-up');
    //     setFormFields(getDefaultFormFields());
    //     navigate(`#${newHash}`);
    // };

    const onToggle = () => {
      const newHash = signUpForm ? 'sign-in' : 'sign-up';
      
      // Calculate the new size and left position based on current refs
      const newSignInDivSize = signInRef.current ? signInRef.current.offsetWidth : 0;
      const newSignUpDivSize = signUpRef.current ? signUpRef.current.offsetWidth : 0;
      
      setSignInDivSize(newSignInDivSize);
      setSignUpDivSize(newSignUpDivSize);
      setSignUpForm(!signUpForm);
      setFormFields(getDefaultFormFields());
      navigate(`#${newHash}`);
  };

    return (
        <SignInContainer>
          <SignUpSection signinmode={`${!signUpForm}`} ref={signUpRef} signupdivsize={signUpDivSize} signindivsize={signInDivSize}>
            <PlainTextButton disabled={!signUpForm} onClick={onToggle}>Have an account? Sign in</PlainTextButton>
              <UserSignUpContainer onSubmit={handleSignUpSubmit}> 
                <h2>Get started</h2>
                <p>Enter your personal details</p>
                <RoundedBorderButton disabled={!signUpForm} onClick={signInWithGoogle} type='button'><DynamicIcon iconName='Google'/>Sign up with Google</RoundedBorderButton>
                <div><hr />OR<hr /></div>
                <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="text" placeholder='First and Last Name' name='displayName' value={displayName} required/>
                <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="email" placeholder='Email' name='email' value={email} required/>
                <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="password" placeholder='Password' name='password' value={password} required/>
                <RoundedBorderInput disabled={!signUpForm} onChange={handleChange} type="password" placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} required/>
                <div>
                    <input type="checkbox" name="" id="acceptTermsConditions" />
                    <label htmlFor="acceptTermsConditions">I accept all terms and conditions</label>
                </div>
                <DarkVariantButton disabled={!signUpForm} type='submit'>Sign in</DarkVariantButton>
            </UserSignUpContainer>
          </SignUpSection>
        <SignInSection signinmode={`${!signUpForm}`} ref={signInRef} signupdivsize={signUpDivSize} signindivsize={signInDivSize}>
          <PlainTextButton disabled={signUpForm} onClick={onToggle}>Don't have an account? Sign up</PlainTextButton>
          <UserSignInContainer onSubmit={handleSignInSubmit}>
              <h2>Welcome back</h2>
              <p>Enter your student account details</p>
              <RoundedBorderButton disabled={signUpForm} onClick={signInWithGoogle} type='button'><DynamicIcon iconName='Google'/>Log in with Google</RoundedBorderButton>
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
        <ImageContainer translateright={signUpForm} signinmode={`${!signUpForm}`} signupdivsize={signUpDivSize} signindivsize={signInDivSize}>
            <img src={images['auth-page-img.jpg']}/>
        </ImageContainer>
      </SignInContainer>
    )
}

export default SignInPage;