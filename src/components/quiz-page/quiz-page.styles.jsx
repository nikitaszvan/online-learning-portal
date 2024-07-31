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
    .submit-button {
        display: block;
        margin: 20px 0;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }


`