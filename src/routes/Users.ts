import { Request, Router, Response } from "express"; 
import { BAD_REQUEST, CREATED , OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core"; 
import { getConnection } from "typeorm"; 
import { User } from  "../entities/User"; 

const UserRouter = Router(); 
UserRouter.get("/all", async (req: Request, res: Response) => {
    const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .getMany();
    return res.status(OK).json({user});
});

export default UserRouter;
