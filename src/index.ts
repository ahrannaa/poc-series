import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./routes/users.routes.js";
import seriesRouter from "./routes/series.routes.js";
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(usersRouter)
app.use(seriesRouter)

const port = process.env.PORT || 4000;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});

