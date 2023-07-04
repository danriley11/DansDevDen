import HeroImage from '../../components/images/HeroImage';
import CoverImage from '../../assets/GrandFoyer.jpeg';
import {
  GrandFoyerFlexContainer,
  GrandFoyerHeading,
  GrandFoyerHeadingContainer,
  GrandFoyerContentContainer,
  Zone,
} from './GrandFoyer.styles';
import { Heading2, Heading3, Heading4, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { CenterAlign, Margin } from '../../components/core/spacing';
import { FLOOR_PLAN_CONTENT, SPACE_INFO_CONTENT, ZONES_CONTENT } from './GrandFoyer.content';
import { offWhite } from '../../components/core/colours';
import { ButtonLink } from '../../components/buttons/Buttons.styles';
import { HOUSEKEEPING } from '../../routes/routes';
import { useNavigate } from 'react-router-dom';
import { FlexDivContainer } from '../../components/blocks/FlexDiv.styles';

const GrandFoyer = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroImage imgSrc={CoverImage} alt={'temp'} width={'100%'} />

      <Container>
        <GrandFoyerHeadingContainer>
          <GrandFoyerHeading>Hello, </GrandFoyerHeading>
          <GrandFoyerHeading>welcome to the home</GrandFoyerHeading>
          <GrandFoyerHeading>of my dev journey.</GrandFoyerHeading>
        </GrandFoyerHeadingContainer>

        <GrandFoyerContentContainer backgroundColour="white">
          <Heading2>A space for everything</Heading2>
          <GrandFoyerFlexContainer>
            <div>
              <Heading3>{SPACE_INFO_CONTENT.title}</Heading3>
              <Margin bottom={24}>
                {SPACE_INFO_CONTENT.content.map((p) => (
                  <P>{p}</P>
                ))}
              </Margin>
              <CenterAlign>
                <ButtonLink href={HOUSEKEEPING}>Planning suite</ButtonLink>
              </CenterAlign>
            </div>

            <div>
              <Heading3>{FLOOR_PLAN_CONTENT.title}</Heading3>
              <Margin bottom={24}>
                {FLOOR_PLAN_CONTENT.content.map((p) => (
                  <P>{p}</P>
                ))}
              </Margin>
              <CenterAlign>
                <ButtonLink disabled>{FLOOR_PLAN_CONTENT.buttonLabel}</ButtonLink>
              </CenterAlign>
            </div>
          </GrandFoyerFlexContainer>
        </GrandFoyerContentContainer>
      </Container>

      <GrandFoyerContentContainer backgroundColour={offWhite}>
        <Container>
          <Heading2>Our available suites</Heading2>
          <FlexDivContainer flexDirection="row" justifyContent="space-evenly">
            {ZONES_CONTENT.map((zone) => (
              <Zone onClick={() => navigate(zone.href)}>
                <Heading4>{zone.title}</Heading4>
                <img src={zone.image} />
                <P>{zone.blurb}</P>
              </Zone>
            ))}
          </FlexDivContainer>
        </Container>
      </GrandFoyerContentContainer>
    </>
  );
};

export default GrandFoyer;
