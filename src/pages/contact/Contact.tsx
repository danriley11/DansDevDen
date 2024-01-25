import { CenterAlign, Margin } from '../../components/core/spacing';
import { Heading1, Heading2, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import ContactWrapper, { ContactNote } from './Contact.styles';

const Contact = () => {
  return (
    <Container>
      <NavBacking />

      <Margin top={48} bottom={48}>
        <Heading1>Contact Dan</Heading1>

        <ContactWrapper>
          <Heading2>First time consultations / Office hours:</Heading2>
          <CenterAlign>
            <P>
              ✉️ Email: <a href="mailto:dan_riley7@outlook.com">dan_riley7@outlook.com</a>
            </P>
          </CenterAlign>

          <CenterAlign>
            <P>
              Please know that part of my services is to support and ensure that you get the best care and service you deserve.
            </P>
          </CenterAlign>

          <ContactNote>
            <P>Standard office hours cover 9AM to 5PM AEST (UTC +11)</P>
          </ContactNote>
        </ContactWrapper>
      </Margin>
    </Container>
  );
};

export default Contact;
