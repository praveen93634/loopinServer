import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import process = require('process');
import connectDB from './config/database';

import admin from 'firebase-admin';
import route from './routes';
import { initializeSocket } from './utils/socket';
const app = express();
const http=require("http")

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
app.use(cors({
    origin:process.env.FrontEnd_BaseUrl  || process.env.FrontEnd_PRODBaseUrl,
    credentials:true
}))
app.use('/', route);

const PORT = process.env.PORT || 3000;

const server=http.createServer(app);
initializeSocket(server)
connectDB()
    .then(() => {
        console.log("✅ Connected to DB");
        server.listen(process.env.PORT, () => {
            console.log("🚀 Server started");
        });
    })
    .catch((err: any) => {
        console.error("❌ DB connection failed:", err);
});



// function initializeApp(firebaseConfig: { apiKey: string; authDomain: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; measurementId: string; }) {
//     throw new Error('Function not implemented.');
// }

