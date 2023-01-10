import { Router, Request, Response } from "express"; 

const AuthRouter = Router();

AuthRouter.post("/register", async (req: Request, res: Response) => {
	await res.send(" register route ");  
})

AuthRouter.post("/login", async (req: Request, res: Response) => {
	await res.send("login route");
})

export default AuthRouter;