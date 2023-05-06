import express, { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { App } from "../client/App";

const app = express();

app.set("view engine", "hbs");
app.set("views", "./src/server/views");

app.use(express.static("dist/public"));

app.get("*", (req: Request, res: Response) => {
  const html = renderToString(<App />);

  res.render("app", {
    markup: html,
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
