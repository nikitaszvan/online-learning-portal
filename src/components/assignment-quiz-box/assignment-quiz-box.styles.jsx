import styled from 'styled-components';

export const TaskBoxContainer = styled.div`
    background-color: ${(props => props.status === 'missed' && '#FFF0F0')}; ${(props => props.status === 'submitted' && '#EEF6EB')}; ${(props => props.status === 'upcoming' && '#F7F9FF')};
    border: 2px solid ${(props => props.status === 'missed' && '#D39999')}; ${(props => props.status === 'submitted' && '#B3C5AD')}; ${(props => props.status === 'upcoming' && '#C3DAFD')};
    padding: 1rem;
    padding-right: 1.5rem;
    gap: 1rem;

    > svg {
        font-size: 14px;
        color: ${(props => props.status === 'missed' && '#D54242')}; ${(props => props.status === 'submitted' && '#476D3A')}; ${(props => props.status === 'upcoming' && '#0F67F9')};
    }

    border-radius: 10px;

    > div:nth-of-type(1) {
        display: block;
        flex: 1;
    }


`

export const TaskBoxHeader = styled.div`
    border-bottom: 2px solid #B1B1B1;
    display: flex;
    font-size: 13px;
    margin-bottom: 1rem;
    padding-bottom: 0.6rem;
    justify-content: space-between;
        
    p {
        margin: 0;
    }

    > p:nth-of-type(1) {
        font-weight: 500;
        font-style: italic;
    }
    
`

export const TaskDescription = styled.p`
    font-size: 12px;
    margin-bottom: 1rem;
`

export const TaskButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    
    gap: 8rem;
    font-size: 12px;
    p {
        margin: 0;
    }

    > div {
        display: flex;
        align-items: center;
    }
`