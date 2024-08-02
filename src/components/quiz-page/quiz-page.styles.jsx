import styled from 'styled-components';

export const QuizContainer = styled.div`
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .quiz-container {
        max-width: 600px;
        margin: auto;
    }
    .question {
        margin-bottom: 15px;
    }
    .question h3 {
        margin: 0;
    }
    .options label {
        display: block;
        margin: 5px 0;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    width: 70%;
    justify-content: space-between;

    > button {
        border: none;
        border-radius: 10px;
        font-size: 1.4rem;
        padding: 0.6rem 1.8rem;
    }
`

export const SubmitQuizButton = styled.button`
    position: relative;
    top: 10%;
    display: block;
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background-color: light-dark(rgba(239, 239, 239, 0.3), rgba(19, 1, 1, 0.3));
        color: light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
        border-color: light-dark(rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3));
    }
`

export const QuizResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    margin-top: 5rem;
`