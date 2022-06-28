import express, { Request, Response } from "express";
import path from "path";
import rotas from "./router/router";

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(rotas);

app.use((req: Request, res: Response) => {
  res.status(404).send("404 pagina não encontrada");
});

app.listen(3000);
