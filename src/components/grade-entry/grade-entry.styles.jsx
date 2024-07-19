import styled from 'styled-components';

export const GradeEntryContainer = styled.div`
    display: flex;
    align-items: center;
    padding-block: 0.6rem;
    padding-inline: 4rem;

    > p {
        width: 25%;
        font-size: 11px;
        margin: 0;
    }
    
     > p:nth-of-type(1) {
        width: 50%;
    }

    > p:nth-of-type(2), > p:nth-of-type(3) {
        text-align: right;
    }
`