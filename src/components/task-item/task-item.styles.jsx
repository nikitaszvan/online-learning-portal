import styled from 'styled-components';

export const TaskItemContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0;
    width: 100%;
    gap: 4rem;

`

export const CourseCodeAndTimeContainer = styled.div`
    min-width: 28%;
    display: flex;
    flex-direction: column;

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
        font-weight: 500;
    } 


    .skeleton-loader:nth-child(1) {
        height: 1.5rem;
        margin-bottom: 0.5rem;
        width: 50%;
        align-self: center;
    }

    .skeleton-loader:nth-child(2) {
        height: 2rem;
        width: 100%;
    }


`

export const TaskDescAndDateContainer = styled.div`
    width: 200px;
    gap: 10px;
    padding-left: 10px;
    font-weight: 500;

        p {
            margin: 0;
        }

        > p {
            color: black;
        }

        p:nth-child(1) {
            // height: 4rem;
            font-size: 12px;
        }

        p:nth-child(2) {
            color: #7A7E9B;
        } 

    .skeleton-loader:nth-child(1) {
        width: 100%;
        height: 1.5rem;
    }

    .skeleton-loader:nth-child(2) {
        width: 80%;
        height: 1.5rem;
    }

`
