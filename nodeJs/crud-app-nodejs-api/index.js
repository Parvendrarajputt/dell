import express from 'express';
import { connection } from './postgres/db.js';
import router from './view/routes.js';
import cors from "cors";

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(router);


const PORT = 8000;
app.listen(PORT, async () => {
    console.log(`The server is running at port ${PORT}`);
    await connection();
});





