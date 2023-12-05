import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// Usa React.lazy para cargar las páginas de forma diferida
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

export function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
