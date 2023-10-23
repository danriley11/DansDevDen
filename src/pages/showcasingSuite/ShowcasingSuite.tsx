import { Divider } from '../../components/blocks/Divider.styles';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';
import ShowcasingBlock from './ShowcasingBlock';
import { SHOWCASING_CASE } from './ShowcasingSuite.constants';

const ShowcasingSuite = () => {
  return (
    <Container>
      <NavBacking />

      <div>
        <PageHeader>Showcasing Suite</PageHeader>

        {SHOWCASING_CASE.map((showcase, i) => (
          <>
            <ShowcasingBlock
              key={i}
              title={showcase.title}
              websiteUrl={showcase.websiteUrl}
              githubUrl={showcase.githubUrl}
              description={showcase.description}
              previewImage={showcase.previewImage}
              previewImageAlt={showcase.previewImageAlt}
              techStack={showcase.techStack}
              howIKnow={showcase.howIKnow}
              launchDate={showcase.launchDate}
              authors={showcase.authors}
            />

            <Divider vertMargin={32} />
          </>
        ))}
      </div>
    </Container>
  );
};

export default ShowcasingSuite;
