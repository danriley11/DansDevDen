import dayjs from 'dayjs';
import { P } from '../../core/typography';
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <P>Copyright © {dayjs().year()} Dans Dev Den - All Rights Reserved.</P>
    </FooterContainer>
  );
};

export default Footer;
