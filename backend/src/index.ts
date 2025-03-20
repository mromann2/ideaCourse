import cors from "cors";
import express from "express";
import { applyTrpcToExpressApp } from "./lib/trpc";
import { trpcRouter } from "./router";

const expressApp = express();
expressApp.listen("2000", () => {
  console.info("im listen at http://localhost:2000");
});
expressApp.get("/start", (req, res) => {
  res.send("start");
});
expressApp.use(cors());
applyTrpcToExpressApp(expressApp, trpcRouter);
