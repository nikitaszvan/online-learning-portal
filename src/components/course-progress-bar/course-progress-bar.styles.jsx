import styled from 'styled-components';
import { ProgressBar } from "react-bootstrap";

export const StyledProgressBar = styled(ProgressBar)`
  width: 100%;
  height: ${( props => props.cardform?.toLowerCase() === 'false' ? '1rem' : '0.7rem')}; 
  background-color: #D9D9D9;
  // transition: height 0.2s ease;
  margin-block: 0.3rem;

  .progress-bar {
    background-color: ${props => props.progressbarcolour};
  }
  &:hover {
    ${(props => props.cardform?.toLowerCase() === 'true' && 'height: 1.2rem')};
  }

`