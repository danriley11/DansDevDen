import styled from 'styled-components';
import { deepGreen, irisGreen, lightGrey, white } from '../../components/core/colours';
import { rem } from '../../components/core/styles';

export const GridContainer = styled.div`
  /* Pre-defined values */
  --grid-column-count: 7;
  --grid-layout-gap: ${rem(16)};
  --grid-item--min-width: ${rem(104)};

  /* Calculated values */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  gap: var(--grid-layout-gap);
  margin-bottom: ${rem(16)};

  /* NOTE: repeat({repetitions}, {min and max values of item size}, {size of remaining space after fulfilling repetitions}) */
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
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
