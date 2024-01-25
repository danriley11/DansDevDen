import styled from 'styled-components';
import { textLightGreen, textDarkGreen } from '../../components/core/colours';
import { CenterAlign } from '../../components/core/spacing';

const ContactWrapper = styled.div`
  background-color: ${textLightGreen};
  color: ${textDarkGreen};
  padding: 24px;
  border-radius: 24px;
`;

export const ContactNote = styled(CenterAlign)`
  filter: opacity(80%);
`;

export default ContactWrapper;
