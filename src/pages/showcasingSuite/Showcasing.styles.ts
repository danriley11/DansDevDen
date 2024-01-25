import styled from 'styled-components';
import { mediaUp, rem } from '../../components/core/styles';
import { hoverGreenLight, softGrey } from '../../components/core/colours';

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
  height: 300px;
  width: 400px;
  object-fit: cover;
  border-radius: ${rem(8)};
  border: 1px solid ${softGrey};
  box-shadow: 0 0 50px ${hoverGreenLight};
`;

export const ShowcasingBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${mediaUp.lg`
  h3 {
      margin-top: 0;
    }
    h4 {
      margin: 0;
    }
  `};
`;

export const ShowcasingBlockFooter = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
