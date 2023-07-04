import dayjs from 'dayjs';
import { P } from '../../core/typography';
import { FooterContainer } from './Footer.styles';
import { Container } from '../Container.styles';

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <Container>
        <P>Copyright © {dayjs().year()} Dans Dev Den - All Rights Reserved.</P>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
