import styled from 'styled-components';
import { mediaUp, rem } from '../../components/core/styles';
import { softGrey } from '../../components/core/colours';

export const ShowcasingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: ${rem(8)};
  padding: ${rem(32)};
  text-align: center;
  justify-content: center;
  column-gap: ${rem(24)};

  ${mediaUp.lg`
        flex-wrap: nowrap;
        text-align: left;

        div {
          flex: 1;
        }
    `}
`;

export const ShowcasingBlockImg = styled.img`
  display: flex;
  border-radius: ${rem(8)};
  border: 1px solid ${softGrey};
`;

export const ShowcasingBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;

  ${mediaUp.lg`
  h4 {
      margin-top: 0;
    }
      `};
`;
