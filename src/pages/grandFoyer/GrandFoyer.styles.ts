import { styled } from 'styled-components';
import { Heading2 } from '../../components/core/typography';
import { mediaUp, rem } from '../../components/core/styles';
import { darkGrey, deepGreen, lightGrey, offWhite, softGrey } from '../../components/core/colours';

export const GrandFoyerContainer = styled.div`
  background-image: url('../../assets/GrandFoyer.jpeg');
`;

export const GrandFoyerHeadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  background-color: ${lightGrey};
  border-radius: 24px;
  padding: 64px;

  ${mediaUp.xs`
    margin: ${rem(64)} 0;
  `};

  ${mediaUp.sm`
    margin: ${rem(64)} 0;
  `};

  ${mediaUp.md`
    margin: ${rem(128)} 0;
  `};

  ${mediaUp.lg`
    margin: ${rem(192)} 0;
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
  color: white;

  ${mediaUp.xs`
  width: 200px;
  line-height: 24px;
  font-size: 24px;
  `}

  ${mediaUp.md`
  width: 400px;
  line-height: 48px;
  font-size: 48px;
  `}

  ${mediaUp.lg`
  width: 600px;
  line-height: 64px;
  font-size: 64px;
  `}
`;

export const GrandFoyerContentContainer = styled.div<{ backgroundColour: string }>`
  padding: ${rem(64)} 0;
  background-color: ${({ backgroundColour }) => backgroundColour};

  h2 {
    color: ${deepGreen};
    text-align: center;
    font-size: 48px;
    line-height: 48px;
  }

  & > div > div > h3 {
    color: ${deepGreen};
  }
`;

export const GrandFoyerFlexContainer = styled.div`
  display: flex;

  :first-child {
    flex: 2;
    padding-right: 24px;
  }
  :nth-child(2) {
    flex: 1;
  }
`;

export const GrandFoyerSuiteContainer = styled.div`
  background-color: ${offWhite};
`;

export const Zone = styled.div`
  text-align: center;
  max-width: 360px;
  border: 1px solid ${darkGrey};
  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  margin: 16px;

  p {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
  }

  & > img {
    border: 1px solid ${softGrey};
    border-radius: 8px;
  }
`;
