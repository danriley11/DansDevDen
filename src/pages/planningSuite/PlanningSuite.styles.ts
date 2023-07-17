import styled from 'styled-components';
import { deepGreen, irisGreen, lightGrey, white } from '../../components/core/colours';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(104px, 1fr));
  gap: 16px;
`;

type GridItemProps = {
  isCurrentDay?: boolean;
};
export const GridItem = styled.div<GridItemProps>`
  display: flex;
  box-sizing: border-box;
  padding: 0 8px;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  border: 1px solid ${lightGrey};
  border-radius: 8px;
  min-width: 104px;
  min-height: 104px;
  text-align: center;
  background-color: ${irisGreen};

  ul {
    padding-left: 0;
    list-style: none;
  }

  ${({ isCurrentDay = false }) =>
    isCurrentDay &&
    `
    background-color: ${deepGreen};
    color: ${white}
  `}
`;

export const DayDate = styled.div`
  margin: 8px 0;
  text-decoration: underline;
`;

export const DayGoals = styled.div`
  display: block;
  padding-bottom: 12px;
  text-align: center;
`;
