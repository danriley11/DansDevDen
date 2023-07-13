import styled from 'styled-components';
import { Heading1 } from '../../components/core/typography';
import { mediaUp, rem } from '../../components/core/styles';

export const HousekeepingHeader = styled(Heading1)`
  text-align: center;
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

export const HousekeepingContentContainer = styled.div`
  h4 {
    text-align: center;
    font-size: ${rem(24)};
    line-height: ${rem(24)};
  }
`;
