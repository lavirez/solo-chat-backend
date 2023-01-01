import cookieParser from "cookie-parser"; 
import express from "experss"; 
import { BAD_REQUEST } from "http-status-codes"; 
import BaseRouter from ",/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extened: true}));
app.use(cookieParser());

app.use('/api', BaseRouter);

export default app; 
