import { Container } from '../../components/pageStructure/Container.styles';
import { HousekeepingHeader } from './HousekeepersLodge.styles';
import HousekeepingAlternatingDiv from './HousekeepingAlternatingDiv';
import { HOUSEKEEPING_CONTENT } from './HousekeepersLodge.content';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';

const HousekeepersLodge = () => {
  return (
    <Container>
      <NavBacking />

      <div>
        <HousekeepingHeader>About Me, Dan</HousekeepingHeader>

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
