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
`