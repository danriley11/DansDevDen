import styled from 'styled-components';
import { Heading1 } from '../../components/core/typography';
import { mediaUp, rem } from '../../components/core/styles';
import { black, deepGreen } from '../../components/core/colours';

export const HousekeepingNavBacking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${black};
  height: ${rem(75)};
`;

export const HousekeepingHeader = styled(Heading1)`
  text-align: center;
  color: ${deepGreen};
  font-size: ${rem(48)};
  line-height: ${rem(48)};
  margin-bottom: ${rem(64)};
`;

export const HousekeepingAlternatingDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: ${rem(24)};
  column-gap: ${rem(24)};

  p {
    text-align: center;
  }

  h4 {
    text-align: center;
    font-size: ${rem(24)};
    line-height: ${rem(24)};
  }

  li > p {
    text-align: left;
  }

  div {
    flex: 1;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  ${mediaUp.sm`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   box-sizing: border-box;
   margin: ${rem(24)};
   column-gap: ${rem(24)};
  `}
`;
