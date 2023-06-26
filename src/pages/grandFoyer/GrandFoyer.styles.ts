import { styled } from 'styled-components';
import { Heading2 } from '../../components/core/typography';
import { mediaUp } from '../../components/core/styles';

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
