import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { ShowcasingHeader } from './Showcasing.styles';
import ShowcasingBlock from './ShowcasingBlock';
import { SHOWCASING_CASE } from './ShowcasingSuite.constants';

const ShowcasingSuite = () => {
  return (
    <Container>
      <NavBacking />

      <div>
        <ShowcasingHeader>Showcasing Suite</ShowcasingHeader>

        {SHOWCASING_CASE.map((showcase, i) => (
          <ShowcasingBlock
            key={i}
            title={showcase.title}
            url={showcase.url}
            description={showcase.description}
            previewImage={showcase.previewImage}
            previewImageAlt={showcase.previewImageAlt}
          />
        ))}
      </div>
    </Container>
  );
};

export default ShowcasingSuite;
