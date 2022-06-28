import { Request, Response, Router } from "express";
import * as Fibonacci from "../controllers/fibonacci";
import * as Fatura from "../controllers/fatura";
import * as Distribuidora from "../controllers/distribuidora";
import * as inverter from "../controllers/inverter";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.render("pages/index");
});
router.get("/sobre", (req: Request, res: Response) => {
  res.render("pages/sobre");
});
router.get("/fibonacci", Fibonacci.Fibonacci);

router.get("/faturamento", Fatura.lista);
router.get("/distribuidora", Distribuidora.faturamento);
router.get("/inverter", inverter.inverter);
export default router;
