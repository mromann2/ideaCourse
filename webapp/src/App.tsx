// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import * as routes from "./lib/routes";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeas } from "./pages/AllIdeasPage";
import { Idea } from "./pages/IdeaPage";
import "./styles/global.scss";
import { NewIdea } from "./pages/NewIdeaPage";

export function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllIdeasRoute()} element={<AllIdeas />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdea />} />
            <Route path={routes.getIdeaRoute(routes.ideaRouteParams)} element={<Idea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}
