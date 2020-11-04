import routerx from "express-promise-router";
import AuthRouter from "./Auth";
import RankingRouter from "./Ranking";

const router = routerx();

router.use("/auth", AuthRouter);
router.use("/ranking", RankingRouter);

export default router;
