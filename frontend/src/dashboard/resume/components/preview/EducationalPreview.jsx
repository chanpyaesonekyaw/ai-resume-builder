import React from 'react';

function EducationalPreview({ resumeInfo }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className='my-6'>
      <h2
        className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.education.map((education, index) => (
        <div key={index} className='my-5'>
          <h2
            className='text-sm font-bold'
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {education.universityName}
          </h2>
          <h2 className='text-xs flex justify-between'>
            <span>
              {education?.degree} in {education?.major}
            </span>
            <span>
              {formatDate(education?.startDate)} - {formatDate(education?.endDate)}
            </span>
          </h2>
          <div
            className='text-xs my-2'
            dangerouslySetInnerHTML={{ __html: education?.description }}
          />
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
