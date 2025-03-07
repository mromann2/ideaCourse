// import { useState } from "react";
import "./App.css";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeas } from "./pages/AllIdeasPage/AllIdeas";

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeas />
    </TrpcProvider>
  );
};
