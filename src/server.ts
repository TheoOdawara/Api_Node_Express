import createApp from "./app.js";

const app = createApp();
const port = process.env.port;

app.listen(port, ()=>{
    console.log(`Server running at port http://localhost:${port}`)
});