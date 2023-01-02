import app from "./Server";
import { initializeDB } from '/.db';

const REDIS_PORT = Number(process.env.REDIS_PORT || 6379);
const PORT = Number(process.env.API_PORT || process.env.PORT || 5002);

initializeDB();
initializeCache();

app.listen(PORT, () => {
    console.log("Express started on port: " + PORT); 
});
