import { Request, Response } from "express";

export const inverter = (req: Request, res: Response) => {
  let texto: string = req.query.texto as string;
  let original = texto;
  let novoTexto = [];
  if (texto === undefined) {
  } else {
    const novo = texto.split("");
    for (var i = novo.length - 1; i >= 0; i--) {
      novoTexto.push(novo[i]);
    }
    texto = novoTexto.toString().replace(/,/g, "");
  }

  res.render("pages/inverter", {
    texto,
    original,
  });
};
