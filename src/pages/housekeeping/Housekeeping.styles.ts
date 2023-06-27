import styled from 'styled-components';
import { Heading1 } from '../../components/core/typography';
import { rem } from '../../components/core/styles';
import { deepGreen } from '../../components/core/colours';

export const HousekeepingNavBacking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  height: ${rem(75)};
`;

export const HousekeepingHeader = styled(Heading1)`
  text-align: center;
  color: ${deepGreen};
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 64px;
`;

export const HousekeepingAlternatingDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 24px;
  column-gap: 24px;

  p {
    text-align: center;
  }

  h4 {
    text-align: center;
    font-size: 24px;
    line-height: 24px;
  }

  li > p {
    text-align: left;
  }

  div {
    flex: 1;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
