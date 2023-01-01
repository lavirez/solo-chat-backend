import app from ".Server";

const PORT = Number(process.env.API_PORT || process.env.PORT || 5002);

app.listen(PORT, () => {
    logger.info("Express started on port: " + PORT); 
});
