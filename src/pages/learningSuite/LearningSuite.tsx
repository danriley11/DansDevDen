import { ButtonLink } from '../../components/buttons/Buttons.styles';
import { Margin } from '../../components/core/spacing';
import { P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';
import { LearningSuiteContentContainer, LearningSuiteH4 } from './LearningSuite.styles';
import { FlexDiv } from '../../components/blocks/FlexDiv.styles';
import CodeImg from '../../assets/CodeImg(copy).jpg';
import img1 from '../../assets/Learning1.webp';
import img2 from '../../assets/Learning2.png';
import img3 from '../../assets/Learning3.jpg';
import { LargerThanTablet } from '../../components/screenSize/ScreenSize.styles';
import Carousel from '../../components/images/Carousel';
import { Divider } from '../../components/blocks/Divider.styles';

const LearningSuite = () => {
  return (
    <>
      <NavBacking />

      <Carousel
        cycleTimer={8000}
        slides={[
          <img src={img1} alt="Slide 1" />,
          <img src={img2} alt="Slide 2" />,
          <img src={img3} alt="Slide 3" />,
        ]}
      />

      <Container>
        <PageHeader>Learning Suite</PageHeader>
        <Margin bottom={40}>
          <P>
            This is a space I wanted to build to not only further ingrain my learnings to date and
            as I go, but also provide a space others can learn from either sequentially or randomly.
          </P>
        </Margin>

        <LearningSuiteH4>
          I have a few problems I'm looking to solve with this space
        </LearningSuiteH4>

        <Margin bottom={64}>
          <FlexDiv justifyContent="space-evenly" flexDirection="row">
            <P margin={0}>
              <ol>
                <li>No mentor/support for learning</li>
                <ul>
                  <li>
                    Learn from readings and examples, then instill them through practice with
                    activities.
                  </li>
                </ul>
                <li>No funds for a course</li>
                <ul>
                  <li>A free platform for its WIP state.</li>
                </ul>
                <li>Unsure of where to start</li>
                <ul>
                  <li>Structured guide of concepts and tools.</li>
                </ul>
                <li>Utilising short bursts of time to learn</li>
                <ul>
                  <li>Using the randomizer in Readings & Examples or trying an activity.</li>
                </ul>
              </ol>
            </P>

            <LargerThanTablet>
              <img src={CodeImg} alt="Code example" width={400} />
            </LargerThanTablet>
          </FlexDiv>
        </Margin>

        <Margin bottom={64}>
          <LearningSuiteContentContainer>
            <div>
              <LearningSuiteH4>Readings & Examples</LearningSuiteH4>
              <P>Learn skills with solution examples in order or randomly</P>
              <ButtonLink disabled>Readings & Examples</ButtonLink>
            </div>
            <Divider />
            <div>
              <LearningSuiteH4>Activities</LearningSuiteH4>
              <P>Take your chances at problem solving and consolidate your skills</P>
              <ButtonLink disabled>Activities</ButtonLink>
            </div>
          </LearningSuiteContentContainer>
        </Margin>
      </Container>
    </>
  );
};

export default LearningSuite;
