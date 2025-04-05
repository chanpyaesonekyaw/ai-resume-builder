import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    city: { type: String, required: false },
    state: { type: String, required: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    workSummary: { type: String, required: false }
});

const educationSchema = new mongoose.Schema({
    universityName: { type: String, required: true },
    degree: { type: String, required: true },
    major: { type: String, required: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    description: { type: String, required: false }
});

const skillsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 10 } 
});

const resumeSchema = new mongoose.Schema({
    title: {type: String, required:true},
    userId: {type: String, required:true},
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    address: {type: String, required: false},
    jobTitle: {type: String, required: false},
    phone: {type: String, required: false},
    email: {type: String, required: false},
    summery: {type: String, required: false},
    address: {type: String, required: false},
    themeColor: {type: String, required:true},
    experience: { type: [experienceSchema], default: [] },
    education: { type: [educationSchema], default: [] },
    skills: { type: [skillsSchema], default: [] },
    createdOn: {type: Date, default: new Date().getTime() },
});

const Resume =  mongoose.model("Resume", resumeSchema);

export default Resume;