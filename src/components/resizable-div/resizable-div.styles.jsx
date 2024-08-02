import styled from 'styled-components';

export const ResizableDivContainer = styled.div`

    #sidebar {
    
        background-color: IndianRed;
        margin-top:10px;
        width:200px;
        float: left;
        position: absolute;
        height:200px;
        overflow-y: hidden;
    }

    #dragbar{

        background-color:black;
        height:100%;
        float: right;
        width: 3px;
        cursor: col-resize;
    }

    #ghostbar {

        width:3px;
        background-color:#000;
        opacity:0.5;
        position:absolute;
        cursor: col-resize;
        z-index:999
    }
`