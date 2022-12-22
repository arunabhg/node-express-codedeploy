import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World, I want to be a good cloud architect!");
});

app.get("/work", (req, res) => {
	res.send("Work is good");
});

app.listen(port, () => {
	console.log(`Server listening on port- ${port}`);
});
