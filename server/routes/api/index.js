import express from 'express';
const router = express.Router();

// Import individual route files (we'll create them)
import authRoutes from './auth.js';
// import courseRoutes from './courses.js';
// import taskRoutes from './tasks.js';

// --- Placeholder Routes ---
// (We'll replace these with the imported files later)
router.get('/', (req, res) => res.json({ message: 'API is working' }));
router.post('/auth/login', (req, res) => res.json({ message: 'Login endpoint' }));
router.post('/tasks/submit', (req, res) => res.json({ message: 'Task submit endpoint' }));


// --- Use Routes ---
router.use('/auth', authRoutes);
// router.use('/courses', courseRoutes);
// router.use('/tasks', taskRoutes);

export default router;
