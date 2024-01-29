import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*", // Permitir todas as origens
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Permitir métodos específicos
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
