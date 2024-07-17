import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { 
  CoursePageContainer,
  FirstColumnContainer,
  SyllabusContainer
 } from './course-page.styles';

 import DynamicIcon from '../../components/dynamic-icon.component';

 pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();




export const CoursePage = ({course}) => {

  const [ showPreview, toggleShowPreview ] = useState(false);

  const fileName = 'Discrete Mathematics I';
  const pdfPath = process.env.PUBLIC_URL + `/pdfs/Course Syllabus ${fileName}.pdf`;
  const handleDownload = (name, e) => {
    e.preventDefault();
    
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `Course Syllabus ${fileName}.pdf`;
    link.click();
  };

  

  return (
    <CoursePageContainer>
      <FirstColumnContainer>
        <SyllabusContainer>
          <h2>Course Syllabus</h2>
          <div style={{display: 'flex'}}>
            <DynamicIcon iconName='PictureAsPdf'/>
            <h3>Course Syllabus - Fall 2024</h3>
          </div>
          <div style={{display: 'flex'}}>
            <button onClick={() => toggleShowPreview(!showPreview)}>Preview</button>
            {showPreview &&
            <Document file={pdfPath}><Page pageNumber={1}/><Page pageNumber={2}/></Document> }
            <button onClick={(e) => handleDownload('Discrete Mathematics I', e)}>Download</button>
          </div>
        </SyllabusContainer>
      </FirstColumnContainer>
        
    </CoursePageContainer>
  )
}

