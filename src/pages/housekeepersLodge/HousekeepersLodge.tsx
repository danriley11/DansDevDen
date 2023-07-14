import { Container } from '../../components/pageStructure/Container.styles';
import HousekeepingAlternatingDiv from './HousekeepingAlternatingDiv';
import { HOUSEKEEPING_CONTENT } from './HousekeepersLodge.content';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';

const HousekeepersLodge = () => {
  return (
    <Container>
      <NavBacking />

      <div>
        <PageHeader>About Me, Dan</PageHeader>

        {HOUSEKEEPING_CONTENT.map((group, index) => (
          <HousekeepingAlternatingDiv
            key={index}
            index={index}
            title={group.title}
            imageSource={group.image}
            imageAlt={group.imageAlt}
            text={group.text}
            list={group.list}
          />
        ))}
      </div>
    </Container>
  );
};

export default HousekeepersLodge;
