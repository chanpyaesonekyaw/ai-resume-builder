import express from 'express';
import {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume
} from '../controllers/resumeController.js';

const router = express.Router();

router.post('/user-resumes', createResume);
router.get('/user-resumes', getUserResumes);
router.get('/user-resumes/:id', getResumeById);
router.put('/user-resumes/:id', updateResume);
router.delete('/user-resumes/:id', deleteResume);

export default router;
