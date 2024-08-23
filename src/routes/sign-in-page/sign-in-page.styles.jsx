import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    background-color: #F5F5F5;
    padding: 2rem;
    height: 100%;
    max-height: 100vh;
`


export const ImageContainer = styled.div`
    position: absolute;
    top: 2rem;
    width: 50%;
    @media (max-width: 1019px) {
        display: none;
    }
    @media (min-width: 1020px) {
        left: ${(props => (props.signinmode.toLowerCase() === 'false' && props.signupdivsize) ? `calc(2rem + ${props.signupdivsize}px)` : '2rem')};
        width: ${(props => (props.signinmode.toLowerCase() === 'false' && props.signindivsize && props.signupdivsize) ? `${props.signindivsize}px` : `${props.signupdivsize}px`)};
    }

    @media (max-width: 1280px) {
        ${(props => (props.signinmode.toLowerCase() === 'true' && !props.signupdivsize) && 'width: calc(100vw - 660px);')}
    }
    transition: left 0.3s ease-in-out;
    height: calc(100% - 4rem);
    border-radius: 40px;
    box-shadow: 2px -2px 20px 0px rgba(255,255,255,1), -2px 2px 20px 0px rgba(255,255,255,1);
    -webkit-box-shadow: 2px -2px 20px 0px rgba(255,255,255,1), -2px 2px 20px 0px rgba(255,255,255,1);
    -moz-box-shadow: 2px -52x 20px 0px rgba(255,255,255,1), -2px 2px 20px 0px rgba(255,255,255,1);
    z-index: 10;
    background-color: #F5F5F5;

    &::after {
        content: '';
        position: absolute;
        border-radius: 40px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 5px -5px 5px 0px rgba(0,0,0,0.15), inset -5px 5px 5px 0px rgba(0,0,0,0.15);
        -webkit-box-shadow: inset 5px -5px 5px 0px rgba(0,0,0,0.15), inset -5px 5px 5px 0px rgba(0,0,0,0.15);
        -moz-box-shadow: inset 5px -5px 5px 0px rgba(0,0,0,0.15), inset -5px 5px 5px 0px rgba(0,0,0,0.15);
    }
    
    > img {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        filter: saturate(40%);
    }
`
export const AuthSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SignInSection = styled(AuthSection) `
    flex: 1;
    display: flex;

    @media (max-width: 1019px) {
        ${( props => props.signinmode.toLowerCase() === 'false' && 'display: none;')}
    }

    @media (min-width: 1445px) {
        min-width: 1px;
        ${( props => (props.signinmode.toLowerCase() === 'true' && props.signindivsize) && `min-width: ${props.signindivsize}px;`)}
        transition: min-width 0.3s ease-in-out;
    }

    @media (max-width: 1280px) {
        ${(props => props.signinmode.toLowerCase() === 'true' && 'min-width: 660px;')}
    }

    @media (max-width: 699px) {
        min-width: unset;
    }


    > button:nth-of-type(1) {
        position: absolute;
        top: 3rem;
        right: 3rem;
    }

`

export const SignUpSection = styled(AuthSection) `
    flex: 1;
    display: flex;

 

    @media (max-width: 1019px) {
        ${( props => props.signinmode.toLowerCase() === 'true' && 'display: none;')}
    }

    @media (min-width: 1445px) {
        min-width: 1px;
        ${( props => (props.signinmode.toLowerCase() === 'false' && props.signupdivsize) && `min-width: ${props.signupdivsize}px;`)}
        transition: min-width 0.3s ease-in-out;
    }

    @media (max-width: 1280px) {
        ${(props => props.signinmode.toLowerCase() === 'false' && 'min-width: 660px;')}
    }

       @media (max-width: 699px) {
        min-width: unset;
    }

    > button:nth-of-type(1) { 
        position: absolute;
        top: 3rem;
        left: 3rem;
    }

    
` 

export const PlainTextButton = styled.button`
    border: none;
    text-decoration: underline;
    background-color: transparent;
    font-weight: 600;
    color: #525252;
    font-size: 1.3rem;
`

export const UserAuthContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    max-width: 700px;
    max-height: 70rem;
    height: 60%;
    justify-content: space-between;

    @media (max-width: 414px) {
        gap: 0.5rem;
    }

    @media (max-width: 699px) {
        width: 90%;
    }


    > * {
        width: 100%;
        text-align: center;
    }

    > h2 {
        margin: 0;
        font-weight: 600;
        font-size: 3.5rem;
    }

    > p {
        font-size: 1.6rem;
    }

    > input {
        text-align: start;
    }

    > div:nth-of-type(1) {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;

        > hr {
            flex: 1;
            opacity: 1;
            border-top-width: 0.1rem;
        }
    }

    > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        padding-inline: 0.5rem;
        margin-block: 1rem;

        > input {
            margin-right: 0.5rem;
            height: 1.5rem;
            aspect-ratio: 1/1;
        }

        > label {
            margin-right: auto;
            font-weight: 600;
            font-size: 1.2rem;
        }

        > button {
            margin-left: auto;
            padding: 0;
        }
    }

`

export const UserSignInContainer = styled(UserAuthContainer)`
    @media (max-width: 414px) {
        height: 80%;
        max-height: unset;
    }   

`

export const UserSignUpContainer = styled(UserAuthContainer)`
    height: 70%;
    max-height: 80rem;

    @media (max-width: 414px) {
        height: 80%;
        max-height: unset;
    }

`

export const RoundedBorderButton = styled.button`
    background-color: white;
    color: black;
    border-radius: 10px;
    height: 10%;
    min-height: 6rem;
    max-height: 7rem;
    border: none;
    font-weight: 600;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    transition: background-color 0.3s ease;

     @media (max-width: 414px) {
        min-height: 4rem;
        max-height: 5rem;
    }

    > svg {
        font-size: 2.2rem;
    }

    &:hover {
        background-color: black;
        color: white;
    }

    &:disabled {
        color: #808080;
    }
`

export const DarkVariantButton = styled(RoundedBorderButton)`
    background-color: black;
    color: white;    
    transition: background-color 0.3s ease;

    &:hover {
        background-color: white;
        color: black;
        border: 0.2rem solid black;
    }

    &:disabled {
        background-color: #808080;
    }
`

export const RoundedBorderInput = styled.input`
    border-radius: 10px;
    height: 10%;
    border: none;
    padding-inline: 1.5rem;
    font-weight: 500;
    font-size: 1.4rem;
    min-height: 6rem;
    max-height: 7rem;

      @media (max-width: 414px) {
        min-height: 4rem;
        max-height: 5rem;
    }
`


