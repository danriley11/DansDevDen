import { styled } from 'styled-components';
import { Heading4 } from '../../components/core/typography';

export const LearningSuiteContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
`;

export const LearningSuiteH4 = styled(Heading4)`
  margin: 0;
`;
