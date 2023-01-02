import cookieParser from "cookie-parser"; 
import express from "express"; 
import { Request, Response, NextFunction } from "express";
import { BAD_REQUEST } from "http-status-codes"; 
import BaseRouter from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extened: true}));
app.use(cookieParser());

app.use('/api', BaseRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message, err);
    return res.status(BAD_REQUEST.json({
        error: err.message,
    }));
});

export default app; 
