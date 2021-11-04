import express from "express";
import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen("3000", () => console.log("API is running on: http://localhost:3000"));