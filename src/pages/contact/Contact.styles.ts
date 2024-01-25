import styled from 'styled-components';
import { darkGreen, greenAccent1 } from '../../components/core/colours';
import { CenterAlign } from '../../components/core/spacing';

const ContactWrapper = styled.div`
  background-color: ${greenAccent1};
  color: ${darkGreen};

  padding: 24px;
  border-radius: 24px;
`;

export const ContactNote = styled(CenterAlign)`
  filter: opacity(60%);
`;

export default ContactWrapper;
