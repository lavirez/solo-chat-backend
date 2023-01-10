import "reflect-metadata"; 
import { Schema, model, connect } from "mongoose"; 
import logger from "../src/shared/Logger";

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.log("database connection failed. Server not started")
        console.error(err);
    })
