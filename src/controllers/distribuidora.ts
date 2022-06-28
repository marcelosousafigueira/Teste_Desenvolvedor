import { Request, Response } from "express";

export const faturamento = (req: Request, res: Response) => {
  let total = 0;
  var faturamento = [
    { estado: "SP", valor: "67.836,43", porcem: "" },
    { estado: "RJ ", valor: "36.678,66", porcem: "" },
    { estado: "MG", valor: "29.229,88", porcem: "" },
    { estado: "ES", valor: "27.165,48", porcem: "" },
    { estado: "Outros", valor: "19.849,53", porcem: "" },
  ];

  for (var i in faturamento) {
    const novo = faturamento[i].valor.replace(".", "").replace(",", ".");
    total = parseFloat(novo) + total;
  }
  for (var i in faturamento) {
    const valorAtual = faturamento[i].valor.replace(".", "").replace(",", ".");
    let valor = ((parseFloat(valorAtual) * 100) / total).toFixed(2);
    faturamento[i].porcem = valor;
  }
  res.render("pages/distribuidora", { faturamento });
};
