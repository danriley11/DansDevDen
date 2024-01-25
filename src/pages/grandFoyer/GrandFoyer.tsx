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
// import { PLANNING } from '../../routes/routes';
import { useNavigate } from 'react-router-dom';
import { FlexDiv } from '../../components/blocks/FlexDiv.styles';
import IntersectionWrapper from '../../components/inViewport/InView';

const GrandFoyer = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroImage imgSrc={CoverImage} alt={'temp'} width={'100%'} />

      <Container>
        <GrandFoyerHeadingContainer>
          <GrandFoyerHeading>Welcome to the home of my </GrandFoyerHeading>
          <GrandFoyerHeading>developer journey</GrandFoyerHeading>
        </GrandFoyerHeadingContainer>

        <GrandFoyerContentContainer backgroundColour="white">
          <Heading2>A space for everything</Heading2>
          <GrandFoyerFlexContainer>
            <IntersectionWrapper
              fadeUp
              children={
                <>
                  <Heading3>{SPACE_INFO_CONTENT.title}</Heading3>
                  <Margin bottom={24}>
                    {SPACE_INFO_CONTENT.content.map((p, i) => (
                      <P key={i}>{p}</P>
                    ))}
                  </Margin>
                  <CenterAlign>
                    {/* <ButtonLink onClick={() => navigate(PLANNING)}>Planning suite</ButtonLink> */}
                    <ButtonLink disabled>Planning suite</ButtonLink>
                  </CenterAlign>
                </>
              }
            />

            <IntersectionWrapper
              fadeUp
              children={
                <>
                  <Heading3>{FLOOR_PLAN_CONTENT.title}</Heading3>
                  <Margin bottom={24}>
                    {FLOOR_PLAN_CONTENT.content.map((p, i) => (
                      <P key={i}>{p}</P>
                    ))}
                  </Margin>
                  <CenterAlign>
                    <ButtonLink disabled>{FLOOR_PLAN_CONTENT.buttonLabel}</ButtonLink>
                  </CenterAlign>
                </>
              }
            />
          </GrandFoyerFlexContainer>
        </GrandFoyerContentContainer>
      </Container>

      <GrandFoyerContentContainer backgroundColour={offWhite}>
        <Container>
          <Heading2>Our available suites</Heading2>
          <FlexDiv flexDirection="row" justifyContent="space-evenly">
            {ZONES_CONTENT.map((zone, i) => (
              <IntersectionWrapper
                fadeUp
                children={
                  <FlexDiv hasHover>
                    <Zone key={i} onClick={() => navigate(zone.href)}>
                      <Heading4>{zone.title}</Heading4>
                      <img src={zone.image} />
                      <P>{zone.blurb}</P>
                    </Zone>
                  </FlexDiv>
                }
              />
            ))}
          </FlexDiv>
        </Container>
      </GrandFoyerContentContainer>
    </>
  );
};

export default GrandFoyer;
