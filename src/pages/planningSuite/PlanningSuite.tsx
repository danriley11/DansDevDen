import dayjs from 'dayjs';
import { Container } from '../../components/pageStructure/Container.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';
import { DayDate, GridContainer, GridItem, DayGoals } from './PlanningSuite.styles';
import { Heading2, Heading4 } from '../../components/core/typography';
import { Margin, CenterAlign } from '../../components/core/spacing';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { MONTHLY_PLANNING_GOALS } from './PlanningSuite.constants';
import { FlexDiv } from '../../components/blocks/FlexDiv.styles';

const PlanningSuite = () => {
  const currentDate = dayjs();
  const initialDevDate = dayjs('2023-7-01');
  const monthsSinceStart = currentDate.diff(initialDevDate, 'months') + 1;

  const monthsArray = Array.from({ length: monthsSinceStart }, (_, index) => {
    const currentMonth = initialDevDate.add(index, 'month');
    const startOfMonth = currentMonth.startOf('month');
    const endOfMonth = currentMonth.endOf('month');
    const daysInMonth = endOfMonth.diff(startOfMonth, 'day') + 1;

    // Create an array of objects for each day in the month
    const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) => {
      const currentDay = startOfMonth.add(dayIndex, 'day');
      return {
        day: currentDay.format('D ddd'),
        date: currentDay,
      };
    });

    return {
      month: currentMonth.format('MMMM YYYY'),
      days: daysArray,
      monthlyGoals: MONTHLY_PLANNING_GOALS,
    };
  });

  console.log('monthsArray', monthsArray);

  return (
    <>
      <NavBacking />

      <Margin bottom={128}>
        <PageHeader>Planning Suite</PageHeader>

        <Container>
          <FlexDiv justifyContent="space-between" flexDirection="row">
            <Heading4>⬅️ Previous month</Heading4>
            <Heading4>Next month ➡️</Heading4>
          </FlexDiv>

          {monthsArray.map((monthData, monthIndex) => (
            <>
              <CenterAlign>
                <Heading2>{monthData.month}</Heading2>
              </CenterAlign>
              <GridContainer key={monthIndex}>
                {monthData.days.map((dayData, dayIndex) => (
                  <GridItem key={dayIndex}>
                    <DayDate>{dayData.day}</DayDate>
                    <ul>
                      {monthData.monthlyGoals[monthIndex].days[dayIndex].goals.map((daysGoals, goalIndex) => (
                        <li key={goalIndex}>
                          <DayGoals>{daysGoals}</DayGoals>
                        </li>
                      ))}
                    </ul>
                  </GridItem>
                ))}
              </GridContainer>
            </>
          ))}
        </Container>
      </Margin>
    </>
  );
};

export default PlanningSuite;
