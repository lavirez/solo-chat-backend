import { Router } from "express"; 
import UserRouter from "./Users"; 
import AuthRouter from "./Auth";

const BaseRouter = Router();


BaseRouter.use("/users", UserRouter);
BaseRouter.use("/auth", AuthRouter);

export default BaseRouter;
