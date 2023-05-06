import dotEnv from "dotenv";
import express, { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "App";
import { getVersion } from "./utils/getVersion";

// init env variables
dotEnv.config();

const app = express();

app.set("view engine", "hbs");
app.set("views", "./src/server/views");

app.use(express.static("dist/public"));

app.get("*", (req: Request, res: Response) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.render("app", {
    markup: html,
    version: getVersion(),
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
