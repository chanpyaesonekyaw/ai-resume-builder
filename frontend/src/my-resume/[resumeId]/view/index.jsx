import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'

function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState()
    const { resumeId } = useParams()

    useEffect(() => {
        GetResumeInfo()
    }, [])

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(resp => {
            setResumeInfo(resp.data)
        })
    }

    const HandleDownload = () => {
        const printContent = document.getElementById('print-area')
        const originalContents = document.body.innerHTML

        document.body.innerHTML = printContent.innerHTML
        window.print()
        document.body.innerHTML = originalContents

        const printArea = document.getElementById('print-area')
        if (printArea) {
            printArea.innerHTML = printContent.innerHTML
        }
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} Resume`,
                    text: "Hello Everyone, This is my resume. Please open the URL to see it:",
                    url: `${import.meta.env.VITE_BASE_URL}/my-resume/${resumeId}/view`
                })
                console.log("Shared successfully!")
            } catch (error) {
                console.error("Error sharing:", error)
            }
        } else {
            alert("Web Share API is not supported in your browser.")
        }
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <Header />

                <div className='container p-10 px-4 mx-auto'>
                    <h2 className='text-center text-2xl font-medium'>
                        Congrats! Your Ultimate AI-generated Resume is ready!
                    </h2>
                    <p className='text-center text-gray-400'>
                        Now you are ready to download your resume and you can share the unique
                        resume URL with your friends and family.
                    </p>
                    <div className='flex justify-between mt-10'>
                        <Button onClick={HandleDownload}>Download</Button>
                        <Button onClick={handleShare}>Share</Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className='my-10 px-4'>
                    <div id="print-area">
                        <ResumePreview />
                    </div>
                </div>
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default ViewResume
