import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import resumeRoutes from './routes/resumeRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api', resumeRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log('Server is running on http://localhost:' + PORT);
    });
}

export default app;
