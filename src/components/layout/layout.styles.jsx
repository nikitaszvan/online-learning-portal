import styled from 'styled-components';

export const LayoutContainer = styled.div`

    .main-body {
        display: flex;
        overflow: hidden; 
        height: calc(100vh - 5rem);
        position: relative;
    }
`

export const CenterDiv = styled.div`
    flex: 1;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    margin-top: 1rem;

    ${(props => props.isblurred?.toLowerCase() == 'true' && 
    `
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
    `)}

`