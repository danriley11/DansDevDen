import styled from 'styled-components';
import { irisGreen } from '../core/colours';

export const FlexDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & div:hover {
    cursor: pointer;
    background-color: ${irisGreen};
  }
`;
