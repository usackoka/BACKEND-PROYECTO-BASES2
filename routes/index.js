import routerx from "express-promise-router";
import EndpointRouter from "./Endpoint";

const router = routerx();

router.use("/endpoint", EndpointRouter);

export default router;
