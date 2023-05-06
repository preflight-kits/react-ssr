import express, { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "App";

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
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
