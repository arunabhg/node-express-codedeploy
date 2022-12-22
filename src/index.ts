import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World from Node + Express + TypeScript!");
});

app.get("/work", (req: Request, res: Response) => {
	res.send("Work is good");
});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
