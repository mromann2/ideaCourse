// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import * as routes from "./lib/routes";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeas } from "./pages/AllIdeasPage";
import { EditIdeaPage } from "./pages/EditIdeaPage";
import { ViewIdeaPage } from "./pages/IdeaPage";
import "./styles/global.scss";
import { NewIdea } from "./pages/NewIdeaPage";
import { SignInPage } from "./pages/SignInPage";
import { SignOutPage } from "./pages/SignOutPage";
import { SignUpPage } from "./pages/SignUpPage";

export function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.getSignOutRoute()} element={<SignOutPage />} />
          <Route element={<Layout />}>
            <Route path={routes.getSignUpRoute()} element={<SignUpPage />} />
            <Route path={routes.getSignInRoute()} element={<SignInPage />} />
            <Route path={routes.getAllIdeasRoute()} element={<AllIdeas />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdea />} />
            <Route path={routes.getIdeaRoute(routes.ideaRouteParams)} element={<ViewIdeaPage />} />
            <Route path={routes.getEditIdeaRoute(routes.editIdeaRouteParams)} element={<EditIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}
