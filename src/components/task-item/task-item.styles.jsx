import styled from 'styled-components';

export const TaskItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

`

export const CourseCodeAndTimeContainer = styled.div`


    > p {
        text-align: right;
        margin: 0;
        font-weight: 600;
        font-size: 10px;
        text-align: center;
    }

    > p:nth-child(1) {
        color: var(--color-on-primary);
    }

      > p:nth-child(2) {
        font-size: 16px;
        font-weight: 600;
    } 
`

export const TaskDescAndDateContainer = styled.div`
    width: 200px;
    gap: 10px;
    padding-left: 10px;
    font-weight: 600;

        p {
            margin: 0;
        }

        > p {
            color: black;
        }

        p:nth-child(2) {
            color: #7A7E9B;
        } 

`
