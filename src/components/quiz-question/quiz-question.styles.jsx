import styled from 'styled-components';

export const QuestionContainer = styled.div `
    width: 80%;
    margin-top: 5rem;

`
export const QuestionHeaderContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    > * {
        margin: 0;
    }

    > h1 {
        font-size: 2.8rem;
    }

    > p {
        font-size: 1.5rem;
        font-weight: 500;
    }
`
export const QuestionGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`
export const QuestionRowContainer = styled.div`
    display: flex;
    gap: 1rem;
    height: fit-content;
`
export const AnswerBox = styled.div`
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid ${(props => props.bordercolour)};
    width: 50%;
`