import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GRAND_FOYER, HOUSEKEEPING } from './routes/routes';
import { Suspense, lazy } from 'react';
import DefaultRouteWrapper from './routes/RouteWrappers';

const GrandFoyer = lazy(() => import('./pages/grandFoyer/GrandFoyer'));
const Housekeeping = lazy(() => import('./pages/housekeeping/Housekeeping'));

function App() {
  return (
    <Router>
      <Suspense fallback={''}>
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
