import styled from 'styled-components';
import { rem } from '../../core/styles';
import { Heading1 } from '../../core/typography';

export const PageHeader = styled(Heading1)`
  text-align: center;
  font-size: ${rem(48)};
  line-height: ${rem(48)};
  margin-bottom: ${rem(64)};
`;
