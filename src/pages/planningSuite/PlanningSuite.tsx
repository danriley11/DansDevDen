import dayjs from 'dayjs';
import { Container } from '../../components/pageStructure/Container.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';
import { DayDate, GridContainer, GridItem, DayGoals, ButtonContainer } from './PlanningSuite.styles';
import { Heading2 } from '../../components/core/typography';
import { Margin, CenterAlign } from '../../components/core/spacing';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { MONTHLY_PLANNING_GOALS } from './PlanningSuite.constants';
import { useState } from 'react';
import { ButtonLink } from '../../components/buttons/Buttons.styles';

const PlanningSuite = () => {
  const currentDate = dayjs();
  const initialDevDate = dayjs('2023-7-01');
  const monthsSinceStart = currentDate.diff(initialDevDate, 'months') + 1;
  const [currentMonthIndex, setCurrentMonthIndex] = useState(monthsSinceStart - 1);

  const handlePreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < monthsSinceStart) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const handleMoveToCurrentMonth = () => {
    setCurrentMonthIndex(monthsSinceStart - 1);
  };

  const monthsArray = Array.from({ length: monthsSinceStart }, () => {
    const currentMonth = initialDevDate.add(currentMonthIndex, 'month');
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

  return (
    <>
      <NavBacking />

      <Margin bottom={128}>
        <PageHeader>Planning Suite</PageHeader>

        <Container>
          <ButtonContainer justifyContent="space-between" flexDirection="row" alignItems="center">
            <ButtonLink onClick={handlePreviousMonth} disabled={currentMonthIndex === 0}>
              ⬅️ Previous month
            </ButtonLink>
            {currentMonthIndex !== monthsSinceStart - 1 && <ButtonLink onClick={handleMoveToCurrentMonth}>Today ↪️</ButtonLink>}
            <ButtonLink onClick={handleNextMonth} disabled={currentMonthIndex === monthsSinceStart - 1}>
              Next month ➡️
            </ButtonLink>
          </ButtonContainer>

          <CenterAlign>
            <Heading2>{monthsArray[currentMonthIndex].month}</Heading2>
          </CenterAlign>

          <Margin bottom={72}>
            <GridContainer>
              {monthsArray[currentMonthIndex].days.map((dayData, dayIndex) => (
                <GridItem key={dayIndex} isCurrentDay={dayData.date.isSame(currentDate, 'day')}>
                  <DayDate>{dayData.day}</DayDate>
                  <ul>
                    {monthsArray[currentMonthIndex].monthlyGoals[currentMonthIndex].days[dayIndex].goals.map(
                      (daysGoals, goalIndex) => (
                        <li key={goalIndex}>
                          <DayGoals>{daysGoals}</DayGoals>
                        </li>
                      ),
                    )}
                  </ul>
                </GridItem>
              ))}
            </GridContainer>
          </Margin>

          <ButtonContainer justifyContent="space-between" flexDirection="row" alignItems="center">
            <ButtonLink onClick={handlePreviousMonth} disabled={currentMonthIndex === 0}>
              ⬅️ Previous month
            </ButtonLink>
            {currentMonthIndex !== monthsSinceStart - 1 && <ButtonLink onClick={handleMoveToCurrentMonth}>Today ↪️</ButtonLink>}
            <ButtonLink onClick={handleNextMonth} disabled={currentMonthIndex === monthsSinceStart - 1}>
              Next month ➡️
            </ButtonLink>
          </ButtonContainer>
        </Container>
      </Margin>
    </>
  );
};

export default PlanningSuite;
