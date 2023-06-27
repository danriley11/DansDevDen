import { Container } from '../../components/pageStructure/Container.styles';
import { HousekeepingHeader, HousekeepingNavBacking } from './Housekeeping.styles';
import HousekeepingAlternatingDiv from './HousekeepingAlternatingDiv';
import { HOUSEKEEPING_CONTENT } from './Housekeeping.content';

const Housekeeping = () => {
  return (
    <Container>
      <HousekeepingNavBacking />

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

export default Housekeeping;
