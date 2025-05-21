import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

import { Engineering } from "./components/frames/services/engineering";
import { Medical } from "./components/frames/services/medical";
import { FireFighting } from "./components/frames/services/fireFighting";
import { Development } from "./components/frames/services/development";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/services">
              <Route path="engineering" element={<Engineering />} />
              <Route path="medical" element={<Medical />} />
              <Route path="fire-fighting" element={<FireFighting />} />
              <Route path="development" element={<Development />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}