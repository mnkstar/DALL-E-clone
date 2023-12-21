import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongoDb/connect';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send("Hello from DALL_E!")
})

const startServer = () => {
    try {
        connectDb(process.env.MONGODB_URL);

        app.listen(8080, () =>
            console.log("Server is running at 8080")
        )
    } catch (error) {
        console.log(`Error ${error}`)
    }
}

startServer()
