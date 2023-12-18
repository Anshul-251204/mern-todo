import express, { urlencoded } from "express";
import cors from "cors";
const app  = express();

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors());



import todoRouter from "./routes/todo.routes.js";

app.use("/api/v1", todoRouter);

export default app;