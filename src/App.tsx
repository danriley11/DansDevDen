import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GRAND_FOYER, HOUSEKEEPING, SHOWCASING } from './routes/routes';
import { Suspense, lazy } from 'react';
import DefaultRouteWrapper from './routes/RouteWrappers';
import ShowcasingSuite from './pages/showcasingSuite/ShowcasingSuite';
import ScrollToTop from './routes/ScrollToTop';

const GrandFoyer = lazy(() => import('./pages/grandFoyer/GrandFoyer'));
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
            path={HOUSEKEEPING}
            element={
              <DefaultRouteWrapper>
                <Housekeeping />
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
