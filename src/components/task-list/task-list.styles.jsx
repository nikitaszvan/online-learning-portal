import styled from 'styled-components';

export const TaskListContainer = styled.div`
    position: relative;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    width: 100%;

    > svg {
        position: relative;
        align-self: center;
        ${(props => props.collapsecolumn ? 'left: 65%;' : 'left: 0;')};
        transition: left 1s ease;
        ${(props => props.showgradient ? '' : 'transform: rotate(180deg)')};
        transition: transform 1s ease;
    }
`
export const TaskListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-weight: 600;
        font-size: 18px;
    }

    div:nth-child(2) {
        display: flex;

        > p {
            margin: 0;
        }

    }
`

export const TaskListContent = styled.div`
    position: relative;
    transition: height 2s ease;
    overflow: hidden;
`
export const TaskListGradient = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255, 0) 75% ,rgba(255,255,255, 1) 90%, rgba(255,255,255,1) 100%);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(props => props.showgradient ? 'display: block;' : 'display: none;')}
`

export const SortByButton = styled.div`
    display: flex;
    background-color: rgba(231, 231, 231, 0.85);
    border-radius: 15px;
    padding: 3px 10px;
    gap: 5px;

    > * {
        color: black;
    }
`

export const AddTaskButton = styled.div`
    background-color: rgba(231, 231, 231, 0.85);
    border-radius: 15px;
    padding: 3px;
`
