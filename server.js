import app from "./app.js";
export default app;

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port: ${process.env.PORT}`);
})