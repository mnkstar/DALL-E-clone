import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js'

import connectDB from './mongoDb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('api/v1/post', postRoutes);
app.use('api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send("Hello from DALL_E!")
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGO);
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer()
