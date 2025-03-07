import * as trpsExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { trpcRouter } from "./trpc";

const app = express();
app.listen("2000", () => {
  console.info("im listen at http://localhost:2000");
});
app.get("/start", (req, res) => {
  res.send("start");
});
app.use(cors());
app.use(
  "/trpc",
  trpsExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
);
