import { styled } from 'styled-components';
import { Heading2 } from '../../components/core/typography';
import { mediaUp, rem } from '../../components/core/styles';
import {
  darkGrey,
  deepGreen,
  lightGrey,
  offWhite,
  softGrey,
  white,
} from '../../components/core/colours';

export const GrandFoyerContainer = styled.div`
  background-image: url('../../assets/GrandFoyer.jpeg');
`;

export const GrandFoyerHeadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  background-color: ${lightGrey};
  border-radius: ${rem(24)};
  padding: ${rem(64)};

  ${mediaUp.xs`
    margin: ${rem(90)} 0;
    padding: ${rem(12)};
  `};
  ${mediaUp.sm`
    margin: ${rem(90)} 0;
    padding: ${rem(24)};
  `};

  ${mediaUp.md`
    margin: ${rem(128)} 0;
    padding: ${rem(64)};
  `};

  ${mediaUp.lg`
    margin: ${rem(192)} 0;
    padding: ${rem(90)};
  `};

  & > h2 {
    margin: 0;

    & + h2 {
      margin: 0;
      width: fit-content;
    }
  }
`;

export const GrandFoyerHeading = styled(Heading2)`
  position: relative;
  color: ${white};

  ${mediaUp.sm`
  width: ${rem(200)};
  line-height: ${rem(24)};
  font-size: ${rem(24)};
  `}

  ${mediaUp.md`
  width: ${rem(400)};
  line-height: ${rem(48)};
  font-size: ${rem(48)};
  `}

  ${mediaUp.lg`
  width: ${rem(600)};
  line-height: ${rem(64)};
  font-size: ${rem(64)};
  `}
`;

export const GrandFoyerContentContainer = styled.div<{ backgroundColour: string }>`
  padding: ${rem(64)} 0;
  background-color: ${({ backgroundColour }) => backgroundColour};

  h2 {
    color: ${deepGreen};
    text-align: center;
    font-size: ${rem(48)};
    line-height: ${rem(48)};
  }

  & > div > div > h3 {
    color: ${deepGreen};
  }
`;

export const GrandFoyerFlexContainer = styled.div`
  display: flex;
  column-gap: ${rem(24)};
  flex-wrap: wrap;

  & > div {
    padding-bottom: ${rem(40)};
  }

  ${mediaUp.md`    
      div:first-child {
        flex: 2;
      }
    
      div:nth-child(2) {
        flex: 1;
      }
      `}
`;

export const GrandFoyerSuiteContainer = styled.div`
  background-color: ${offWhite};
`;

export const Zone = styled.div`
  background-color: ${white};
  text-align: center;
  max-width: ${rem(360)};
  height: ${rem(448)};
  border: 1px solid ${darkGrey};
  border-radius: ${rem(8)};
  padding: ${rem(24)};
  box-sizing: border-box;
  margin: ${rem(16)};

  p {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
  }

  & > img {
    border: 1px solid ${softGrey};
    border-radius: ${rem(8)};
    object-fit: cover;
    height: 200px;
    width: 300px;
  }
`;
