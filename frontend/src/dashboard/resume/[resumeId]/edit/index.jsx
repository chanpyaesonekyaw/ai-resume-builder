import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
    const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(()=>{
       
        GetResumeInfo();
    },[])


    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
          // console.log(resp.data);
          setResumeInfo(resp.data);
        })
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className="container mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 px-4 gap-10'>
          {/* Form Section  */}
            <FormSection/>
          {/* Preview Section  */}
          <ResumePreview/>
      </div>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume