import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

import { Engineering } from "./components/frames/services/engineering";
import { Medical } from "./components/frames/services/medical";
import { FireFighting } from "./components/frames/services/fireFighting";
import { Development } from "./components/frames/services/development";
import { Hygiene } from "./components/frames/services/hygiene";
import { SafetyManagement } from "./components/frames/services/safetyManagement";
import { Ergonomics } from "./components/frames/services/ergonomics";
import { Environment } from "./components/frames/services/environment";
import { Construction } from "./components/frames/services/construction";
import { Training } from "./components/frames/services/training";
import { Consulting } from "./components/frames/services/consulting";

const routerBasename = window.location.hostname.endsWith("github.io")
  ? "/mais-prevencao-web"
  : undefined;

export function AppRouter() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/services">
              <Route path="engineering" element={<Engineering />} />
              <Route path="medical" element={<Medical />} />
              <Route path="fire-fighting" element={<FireFighting />} />
              <Route path="development" element={<Development />} />
              <Route path="hygiene" element={<Hygiene />} />
              <Route path="safety-management" element={<SafetyManagement />} />
              <Route path="ergonomics" element={<Ergonomics />} />
              <Route path="environment" element={<Environment />} />
              <Route path="construction" element={<Construction />} />
              <Route path="training" element={<Training />} />
              <Route path="consulting" element={<Consulting />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

