import cors from "cors";
import express from "express";
import { type AppContext, createAppContext } from "./lib/ctx";
import { applyTrpcToExpressApp } from "./lib/trpc";
import { trpcRouter } from "./router";

void (async () => {
  let ctx: AppContext | undefined;
  try {
    ctx = createAppContext();
    const expressApp = express();
    expressApp.listen("2000", () => {
      console.info("im listen at http://localhost:2000");
    });
    expressApp.get("/start", (req, res) => {
      res.send("start");
    });
    expressApp.use(cors());
    applyTrpcToExpressApp(expressApp, ctx, trpcRouter);
  } catch (error) {
    console.error(error);
    await ctx?.stop();
  }
})();
