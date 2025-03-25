import cors from "cors";
import express from "express";
import { type AppContext, createAppContext } from "./lib/ctx";
import { env } from "./lib/env";
import { applyPassportToExpressApp } from "./lib/passport";
import { applyTrpcToExpressApp } from "./lib/trpc";
import { trpcRouter } from "./router";

void (async () => {
  let ctx: AppContext | undefined;
  try {
    ctx = createAppContext();
    const expressApp = express();
    expressApp.listen(env.PORT, () => {
      console.info(`Listening at http://localhost:${env.PORT}`);
    });
    expressApp.use(cors());
    applyPassportToExpressApp(expressApp, ctx);
    await applyTrpcToExpressApp(expressApp, ctx, trpcRouter);
  } catch (error) {
    console.error(error);
    await ctx?.stop();
  }
})();
