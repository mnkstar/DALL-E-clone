import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
// import { Configuration, OpenAIApi } from 'openai'
import PostSchema from '../mongoDb/models/post.js';

dotenv.config();

const router = express.Router();

export default router;