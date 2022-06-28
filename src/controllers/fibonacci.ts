import { Request, Response } from "express";

export const Fibonacci = (req: Request, res: Response) => {
  let numero: any = req.query.numero;
  let validador: boolean = false;
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;
  if (numero == 0) {
    validador = true;
  }
  for (let i = 0; i < numero; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    if (n3 == numero || numero === 0) {
      validador = true;
    }
  }
  res.render("pages/fibonnaci", {
    numero,
    validador,
  });
};
