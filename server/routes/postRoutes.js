import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import Post from '../models/postModel.js'

dotenv.config()

const router = express.Router()

export default router