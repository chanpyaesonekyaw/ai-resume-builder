import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem';
function Dashboard() {

  const {user} = useUser();

  const [resumeList, setResumeList] = useState([]);

  useEffect(()=>{
    user && GetResumesList();
  }, [user]);

  const GetResumesList = ()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then((res)=>{
      setResumeList(res.data.data);
    })
  }

  return (
    <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p>Start Createing AI resume to your next Job role</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
            <AddResume />
            {resumeList.length > 0 && resumeList.map((resume, index)=>(
                <ResumeCardItem key={index} resume={resume} />
            ))}
        </div>
    </div>
  )
}

export default Dashboard