import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import RichTextEditor from '../RichTextEditor'

function Education() {
  const [loading, setLoading] = useState(false);
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  const params = useParams();
  const [educationalList, setEducationalList] = useState([
    {
      universityName: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  ])

  useEffect(() => {
    if (resumeInfo?.education?.length > 0) {
      setEducationalList(resumeInfo.education);
    }
  }, [resumeInfo]);

  const handleChange = (event, index) => {
    const newEntries = educationalList.slice();
    const {name, value} = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
    setResumeInfo({
      ...resumeInfo,
      education: newEntries
    });
  }

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = educationalList.slice();
    newEntries[index][name] = e.target.value;
    setEducationalList(newEntries);
    setResumeInfo({
      ...resumeInfo,
      education: newEntries
    });
  }

  const AddNewEducation = () => {
    const newList = [...educationalList, {
      universityName: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      description: ''
    }];
    setEducationalList(newList);
    setResumeInfo({
      ...resumeInfo,
      education: newList
    });
  }

  const RemoveEducation = () => {
    if (educationalList.length > 1) {
      const newList = educationalList.slice(0, -1);
      setEducationalList(newList);
      setResumeInfo({
        ...resumeInfo,
        education: newList
      });
    }
  }

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationalList.map(({ id, ...rest }) => rest)
      }
    }

    console.log('Saving data:', data);

    GlobalApi.UpdateResumeDetail(params.resumeId, data).then(resp => {
      console.log('Save response:', resp);
      setLoading(false);
      toast('Details updated!');
    }, (error) => {
      setLoading(false);
      console.error('Save error:', error);
      toast.error('Failed to update education details');
    });
  }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Education</h2>
      <p>Add Your educational details</p>

      <div>
        {educationalList.map((item, index) => (
          <div key={index}>
            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
              <div className='col-span-2'>
                <label className='text-xs'>University Name</label>
                <Input name="universityName" 
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.universityName}
                />
              </div>
              <div>
                <label className='text-xs'>Degree</label>
                <Input name="degree" 
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.degree} />
              </div>
              <div>
                <label className='text-xs'>Major</label>
                <Input name="major" 
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.major} />
              </div>
              <div>
                <label className='text-xs'>Start Date</label>
                <Input type="date" name="startDate" 
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.startDate} />
              </div>
              <div>
                <label className='text-xs'>End Date</label>
                <Input type="date" name="endDate" 
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.endDate} />
              </div>
              <div className='col-span-2'>
                <RichTextEditor
                  index={index}
                  defaultValue={item?.description}
                  onRichTextEditorChange={(event) => handleRichTextEditor(event, 'description', index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Button variant="outline" onClick={AddNewEducation} className="text-primary"> + Add More Education</Button>
          <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}    
        </Button>
      </div>
    </div>
  )
}

export default Education