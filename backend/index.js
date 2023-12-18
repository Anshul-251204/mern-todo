import app from "./app.js";
import connectedDB from "./db/connection.js";
import { config } from "dotenv";
config()

connectedDB()
app.listen(process.env.PORT, () =>
	console.log("server is LISTENING ON PORT :", process.env.PORT)
);
