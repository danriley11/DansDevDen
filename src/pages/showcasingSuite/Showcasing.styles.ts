import styled from 'styled-components';
import { mediaUp, rem } from '../../components/core/styles';
import { Heading1 } from '../../components/core/typography';
import { black, softGrey } from '../../components/core/colours';

export const ShowcasingHeader = styled(Heading1)`
  text-align: center;
  font-size: ${rem(48)};
  line-height: ${rem(48)};
  margin-bottom: ${rem(64)};
`;

export const ShowcasingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${black};
  border-radius: ${rem(8)};
  padding: ${rem(32)};
  text-align: center;
  justify-content: center;
  column-gap: ${rem(24)};

  div {
    flex: 1;
  }

  ${mediaUp.lg`
        flex-wrap: nowrap;
        text-align: left;
    `}
`;

export const ShowcasingBlockImg = styled.img`
  display: flex;
  border-radius: ${rem(8)};
  border: 1px solid ${softGrey};
`;

export const ShowcasingBlockContent = styled.div`
  ${mediaUp.lg`
  h4 {
      margin-top: 0;
    }
      `};
`;
