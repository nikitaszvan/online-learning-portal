import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
// background-color: ${props => (
//     props.status === 'missed' ? '#FFF0F0' :
//     props.status === 'submitted' ? '#EEF6EB' :
//     props.status === 'upcoming' ? '#F7F9FF' :
//     'inherit'
//         )};

export const TaskBoxContainer = styled(Card)`
    width: 100%;

    border: 1px solid ${props => (props.status === 'missed' ? '#D39999' :
            props.status === 'submitted' ? '#B3C5AD' : 
            props.status === 'upcoming' ? '#C3DAFD' :
        'inherit'
            )};
    gap: 1rem;
    display: flex;
    flex-direction: row;
    flex: 1;

    > svg {
        font-size: 14px;
        color: ${props => (
            props.status === 'missed' ? '#D54242' :
            props.status === 'submitted' ? '#476D3A' :
            props.status === 'upcoming' ? '#0F67F9' :
            'inherit'
        )};
        
        margin-left: 2rem;
        margin-top: 1.3rem;
    }

    border-radius: 5px;

    > div:nth-of-type(1) {
        display: block;
        flex: 1;
    }

    .card-header {
        background-color: transparent;
        border-bottom: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        > div {
            margin: 0;
            padding: 0;
        }
    }

    .card-body {
        border-top: 1px solid rgba(0, 0, 0, 0.175);
        margin-top: 0.5rem;
        display: grid;
        flex-direction: column;
    }

`

export const TaskBoxHeader = styled.div`
    display: flex;
    font-size: 13px;
    margin-bottom: 1rem;
    justify-content: space-between;
    flex: 1;
    padding-inline: 2rem;
        
    p {
        margin-block: 0.5rem;
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
    width: 100%;
    justify-content: space-between;
    justify-self: start;
    font-size: 12px;

    p {
        white-space: nowrap;
    }

    p {
        margin: 0;
    }

    > p:nth-of-type(2) {
        cursor: pointer;
        &:hover {
            ${(props => props.status === 'submitted' && 'text-decoration: underline')};
        }
    }

    > div {
        display: flex;
        align-items: center;
    }
`