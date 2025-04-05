import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState, useEffect } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';

const EXPERIENCE_PROMPT = 'position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags';

const EDUCATION_PROMPT = 'degree: {degree}, major: {major}, university: {universityName}. Give me 3-5 bullet points highlighting key academic achievements, relevant coursework, and academic honors (if any) for my education section, give me result in HTML tags';

function RichTextEditor({onRichTextEditorChange, index, defaultValue, type = 'experience'}) {
    const [value, setValue] = useState(defaultValue);
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);

    // Update local value when defaultValue changes
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const GenerateContentFromAI = async() => {
        if (type === 'experience' && !resumeInfo?.experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }
        if (type === 'education' && (!resumeInfo?.education[index]?.degree || !resumeInfo?.education[index]?.major || !resumeInfo?.education[index]?.universityName)) {
            toast('Please Add Degree, Major, and University Name');
            return;
        }

        setLoading(true);
        try {
            let prompt;
            if (type === 'experience') {
                prompt = EXPERIENCE_PROMPT.replace('{positionTitle}', resumeInfo?.experience[index].title);
            } else {
                prompt = EDUCATION_PROMPT
                    .replace('{degree}', resumeInfo?.education[index].degree)
                    .replace('{major}', resumeInfo?.education[index].major)
                    .replace('{universityName}', resumeInfo?.education[index].universityName);
            }

            const result = await AIChatSession.sendMessage(prompt);
            const resp = result.response.text();
            const jsonData = JSON.parse(resp);

            console.log(jsonData);
            
            const points = jsonData.resume_points || jsonData.bullet_points || [];
            const htmlList = `<ul>${points.map(point => `<li>${point}</li>`).join('')}</ul>`;

            
            // Update local state
            setValue(htmlList);
            
            // Update parent component
            const event = {
                target: {
                    value: htmlList
                }
            };
            onRichTextEditorChange(event);
            
            setLoading(false);
            toast.success('AI content generated successfully!');
        } catch (error) {
            console.error('AI generation error:', error);
            setLoading(false);
            toast.error('Failed to generate AI content');
        }
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Description</label>
                <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={GenerateContentFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary"
                >
                    {loading ? (
                        <LoaderCircle className='animate-spin'/>
                    ) : (
                        <>
                            <Brain className='h-4 w-4'/> Generate from AI 
                        </>
                    )}
                </Button>
            </div>
            <EditorProvider>
                <Editor 
                    value={value} 
                    onChange={(e) => {
                        setValue(e.target.value);
                        onRichTextEditorChange(e);
                    }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;