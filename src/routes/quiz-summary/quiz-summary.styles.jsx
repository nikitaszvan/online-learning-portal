import styled from 'styled-components';

export const SummaryContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

export const TextContainer = styled.div`
    height: 95%;
    width: 60%;

    @media (max-width: 750px) {
        width: 80%;
    }
    line-height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;
    padding-top: 2rem;

    > * {
        width: 100%;
    }

    > button {  
        background-color: ${(props => props.isdisabled ? '#9a9a9a' : '#0666B3')};
        border: none;
        color: white;
        padding: 0.8rem 2rem;
        font-size: 1.5rem;
        border-radius: 10px;
        width: fit-content;
    }
    
    > h1 {
        text-align: center;
    }

    > p {
        font-size: 1.5rem;
    }

`