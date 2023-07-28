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
            <ol>
              <li>
                <P margin={0}>No mentor/support for learning</P>
              </li>
              <ul>
                <li>
                  <P margin={0}>
                    Learn from readings and examples, then instill them through practice with
                    activities.
                  </P>
                </li>
              </ul>
              <li>
                <P margin={0}>No funds for a course</P>
              </li>
              <ul>
                <li>
                  <P margin={0}>A free platform for its WIP state.</P>
                </li>
              </ul>
              <li>
                <P margin={0}>Unsure of where to start</P>
              </li>
              <ul>
                <li>
                  <P margin={0}>Structured guide of concepts and tools.</P>
                </li>
              </ul>
              <li>
                <P margin={0}>Utilising short bursts of time to learn</P>
              </li>
              <ul>
                <li>
                  <P margin={0}>
                    Using the randomizer in Readings & Examples or trying an activity.
                  </P>
                </li>
              </ul>
            </ol>

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
