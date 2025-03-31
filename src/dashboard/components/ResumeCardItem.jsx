import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
    <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
      <div className='p-14 py-24 border flex items-center justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 hover:shadow-md transition-all
        cursor-pointer border-solid border-primary'>
        <Notebook />
      </div>
      <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem