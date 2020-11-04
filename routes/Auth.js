import routerx from "express-promise-router";
import AuthController from "../controllers/AuthController";
const router = routerx();

router.post("/login", AuthController.auth);

export default router;
