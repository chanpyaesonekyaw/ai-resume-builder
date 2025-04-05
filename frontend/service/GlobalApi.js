import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosClient = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Content-Type' : 'application/json',
    }
})

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userId)=>axiosClient.get('/user-resumes?userId='+userId);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id)

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}