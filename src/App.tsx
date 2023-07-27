import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GRAND_FOYER, HOUSEKEEPING, LEARNING, PLANNING, SHOWCASING } from './routes/routes';
import { Suspense, lazy } from 'react';
import DefaultRouteWrapper from './routes/RouteWrappers';
import ScrollToTop from './routes/ScrollToTop';

const GrandFoyer = lazy(() => import('./pages/grandFoyer/GrandFoyer'));
const LearningSuite = lazy(() => import('./pages/learningSuite/LearningSuite'));
const ShowcasingSuite = lazy(() => import('./pages/showcasingSuite/ShowcasingSuite'));
const PlanningSuite = lazy(() => import('./pages/planningSuite/PlanningSuite'));
const Housekeeping = lazy(() => import('./pages/housekeepersLodge/HousekeepersLodge'));

function App() {
  return (
    <Router>
      <Suspense fallback={''}>
        <ScrollToTop />
        <Routes>
          <Route
            path={GRAND_FOYER}
            element={
              <DefaultRouteWrapper>
                <GrandFoyer />
              </DefaultRouteWrapper>
            }
          />

          <Route
            path={LEARNING}
            element={
              <DefaultRouteWrapper>
                <LearningSuite />
              </DefaultRouteWrapper>
            }
          />

          <Route
            path={SHOWCASING}
            element={
              <DefaultRouteWrapper>
                <ShowcasingSuite />
              </DefaultRouteWrapper>
            }
          />

          <Route
            path={PLANNING}
            element={
              <DefaultRouteWrapper>
                <PlanningSuite />
              </DefaultRouteWrapper>
            }
          />

          <Route
            path={HOUSEKEEPING}
            element={
              <DefaultRouteWrapper>
                <Housekeeping />
              </DefaultRouteWrapper>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
