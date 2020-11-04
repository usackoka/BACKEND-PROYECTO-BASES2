import routerx from "express-promise-router";
import RankingController from "../controllers/RankingController";
const router = routerx();

router.get("/", RankingController.listRanking);

export default router;
