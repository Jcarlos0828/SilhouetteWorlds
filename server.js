import express from "express";
import cors from "cors";
import helloRouter from "./src/hello/router.js";
import pokemonsRouter from "./src/pokemons/router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/hello", helloRouter);

app.use("/pokemons", pokemonsRouter);

export default app;
