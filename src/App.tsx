import { useEffect, type ReactNode } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Skills } from "./layout/Skills";
import { Work } from "./layout/Work";
import { Contact } from "./layout/Contact";
import { SiteFooter } from "./layout/Footer";

import "./assets/styles/App.css";

const titles: Record<string, string> = {
  "/": "Monica Nguyen",
  "/about": "About · Monica Nguyen",
  "/skills": "Skills · Monica Nguyen",
  "/work": "Work · Monica Nguyen",
  "/contact": "Contact · Monica Nguyen",
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? "Monica Nguyen";
  }, [pathname]);

  return null;
}

function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page-enter flex min-h-[calc(100dvh-56px)] flex-col">
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}

function NotFound() {
  return (
    <section className="section-pad">
      <div className="page-column text-center">
        <h1 className="heading-lg text-ink">This page isn&apos;t here</h1>
        <p className="mt-3 text-body-sm text-body">
          The link may be out of date.
        </p>
        <Link to="/" className="mt-6 inline-block text-body-sm text-ink underline">
          Back home
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <div className="min-h-screen bg-canvas text-ink font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route
            path="/skills"
            element={
              <Page>
                <Skills />
              </Page>
            }
          />
          <Route
            path="/work"
            element={
              <Page>
                <Work />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route
            path="*"
            element={
              <Page>
                <NotFound />
              </Page>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
