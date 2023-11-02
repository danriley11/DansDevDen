import dayjs from 'dayjs';
import { Heading4, P } from '../../core/typography';
import { FooterContainer } from './Footer.styles';
import { Container } from '../Container.styles';
import { Link } from 'react-router-dom';
import ButtonTab from '../../buttons/ButtonTab';

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <footer className="footer-top">
        <Container>
          <Heading4>Daniel Riley</Heading4>
          <Link to="" aria-disabled>
            Testimonies
          </Link>
          <Link to="" aria-disabled>
            Contact Me
          </Link>
        </Container>
        <Container>
          <Heading4>Resources</Heading4>
          <Link to="" aria-disabled>
            Packages
          </Link>
          <Link to="" aria-disabled>
            Attributions
          </Link>
        </Container>
        <Container>
          <Heading4>Socials</Heading4>
          <div className="footer-socials">
            <ButtonTab url="https://github.com/danriley11" buttonText={<img src="/src/assets/GitHubLogo.png" width="32px" />} />
            <ButtonTab
              url="https://www.linkedin.com/in/daniel-riley-a0b43415a/"
              buttonText={<img src="/src/assets/LinkedInLogo.png" width="32px" />}
            />
            <ButtonTab
              url="https://www.canva.com/design/DAFyOF4C9_A/JxTgvBaS67HPB4iU3pMHlw/view?utm_content=DAFyOF4C9_A&utm_campaign=designshare&utm_medium=link&utm_source=editor#1"
              buttonText={<img src="/src/assets/ResumeIcon.png" width="32px" />}
            />
          </div>
        </Container>
      </footer>
      <footer className="footer-bottom">
        <Container>
          <P>© {dayjs().year()} Dans Dev Den - All rights reserved</P>
        </Container>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
