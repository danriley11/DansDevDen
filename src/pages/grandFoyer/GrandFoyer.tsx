import HeroImage from '../../components/images/HeroImage';

import CoverImage from '../../assets/CoverImage.jpg';
import {
  GrandFoyerFlexContainer,
  GrandFoyerHeading,
  GrandFoyerHeadingContainer,
  GrandFoyerContentContainer,
  Zone,
} from './GrandFoyer.styles';
import { Heading2, Heading3, Heading4, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { Margin, RightAlign } from '../../components/core/spacing';
import { FLOOR_PLAN_CONTENT, SPACE_INFO_CONTENT, ZONES_CONTENT } from './GrandFoyer.content';
import { offWhite } from '../../components/core/colours';
import FlexDiv from '../../components/blocks/FlexDiv';

const GrandFoyer = () => {
  return (
    <>
      <HeroImage imgSrc={CoverImage} alt={'temp'} width={'100%'} />

      <Margin bottom={128}>
        <Container>
          <GrandFoyerHeadingContainer>
            <GrandFoyerHeading>Hello, </GrandFoyerHeading>
            <GrandFoyerHeading>and welcome to</GrandFoyerHeading>
            <GrandFoyerHeading>Dans dev den.</GrandFoyerHeading>
          </GrandFoyerHeadingContainer>

          <GrandFoyerContentContainer backgroundColour="white">
            <Heading2>A space for everything</Heading2>
            <GrandFoyerFlexContainer>
              <div>
                <Heading3>{SPACE_INFO_CONTENT.title}</Heading3>
                {SPACE_INFO_CONTENT.content.map((p) => (
                  <P>{p}</P>
                ))}
                <P>
                  Please note that this is currently a large work in progress with many, many
                  features in the pipeline. If you're interested in finding out more about these
                  features, I would love to introduce you to my <a href="#">Planning suite</a>!
                </P>
              </div>
              <div>
                <Heading3>{FLOOR_PLAN_CONTENT.title}</Heading3>
                {FLOOR_PLAN_CONTENT.content.map((p) => (
                  <P>{p}</P>
                ))}
                <RightAlign>
                  <button>{FLOOR_PLAN_CONTENT.buttonLabel}</button>
                </RightAlign>
              </div>
            </GrandFoyerFlexContainer>
          </GrandFoyerContentContainer>
        </Container>

        <GrandFoyerContentContainer backgroundColour={offWhite}>
          <Container>
            <Heading2>Den zones</Heading2>
            <FlexDiv>
              {ZONES_CONTENT.map((zone) => (
                <Zone>
                  <Heading4>{zone.title}</Heading4>
                  <img src={zone.image} height={192} width={294} />
                  <P>{zone.blurb}</P>
                </Zone>
              ))}
            </FlexDiv>
          </Container>
        </GrandFoyerContentContainer>
      </Margin>
    </>
  );
};

export default GrandFoyer;
