import { Request, Response } from "express";
import fatura from "../../fatura.json";

export const lista = (req: Request, res: Response) => {
  let soma = 0;
  let media = 0;
  const maxValue = fatura.reduce(function (prev, data) {
    return prev.valor > data.valor ? prev : data;
  });
  const newFatura = fatura.filter((item) => item.valor != 0);
  const minValue = newFatura.reduce(function (prev, data) {
    return prev.valor < data.valor ? prev : data;
  });
  for (var i in fatura) {
    soma += fatura[i].valor;
  }
  media = soma / fatura.length;

  res.render("pages/fatura", { fatura, maxValue, minValue, media });
};
