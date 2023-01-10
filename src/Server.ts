import cookieParser from "cookie-parser"; 
import express from "express"; 
import cors from "cors"; 
import { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { BAD_REQUEST } from "http-status-codes"; 
import BaseRouter from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));


app.use('/api', BaseRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message, err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});

export default app; 
