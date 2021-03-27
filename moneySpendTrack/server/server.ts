import express from "express";
import {Request, Response} from "express";
const app = express();

console.clear();

//HTTP Methods
app.get("/", (request: Request, response: Response) => 
{
   response.send("Abacate"); 
});

//Functions
app.listen(3000, () =>
{
    console.log("Servior ON!");
});