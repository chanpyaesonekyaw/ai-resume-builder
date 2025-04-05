import Resume from '../models/resumeModel.js';

// Create a new resume
export const createResume = async (req, res) => {
    try {
        const newResume = new Resume(req.body);
        const savedResume = await newResume.save();
        res.status(201).json(savedResume);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all resumes by userID
export const getUserResumes = async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: "Missing required query parameter: userId" });
    }

    try {
        const resumes = await Resume.find({ userId });
        if (resumes.length === 0) {
            return res.status(404).json({ message: "No resumes found for this user" });
        }
        res.status(200).json(resumes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Get single resume by ID
export const getResumeById = async (req, res) => {
    const { id } = req.params;
    try {
        const resume = await Resume.findById(id);
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.status(200).json(resume);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update resume by ID
export const updateResume = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedResume = await Resume.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedResume) return res.status(404).json({ message: 'Resume not found' });
        res.status(200).json(updatedResume);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete resume by ID
export const deleteResume = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedResume = await Resume.findByIdAndDelete(id);
        if (!deletedResume) return res.status(404).json({ message: 'Resume not found' });
        res.status(200).json({ message: 'Resume deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
