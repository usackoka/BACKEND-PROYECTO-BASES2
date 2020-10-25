import routerx from "express-promise-router";
import EndpointController from "../controllers/EndpointController";
const router = routerx();

router.get("/list", EndpointController.list);

export default router;
