import app from "./Server";
import "reflect-metadata"; 
import  mongoose from "mongoose";
import logger from "../src/shared/Logger";
import "dotenv/config";

const PORT = Number(process.env.API_PORT || process.env.PORT || 5002);
mongoose.set("strictQuery", false);
mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => {
        app.listen(PORT, () => {
            logger.info(`Server is listening on ${PORT}`);
        });
    })
    .catch(err => {
        logger.warn("database connection failed. Server not started")
        logger.error(err);
    })
