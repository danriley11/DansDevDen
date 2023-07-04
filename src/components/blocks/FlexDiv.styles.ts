import styled from 'styled-components';
import { irisGreen } from '../core/colours';

type FlexDivContainerProps = {
  flexWrap?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignContent?: string;
};
export const FlexDivContainer = styled.div<FlexDivContainerProps>`
  display: flex;
  flex-wrap: ${({ flexWrap = 'wrap' }) => flexWrap};
  flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
  justify-content: ${({ justifyContent = 'inherit' }) => justifyContent};
  align-content: ${({ alignContent = 'inherit' }) => alignContent};

  & div:hover {
    cursor: pointer;
    background-color: ${irisGreen};
  }
`;
