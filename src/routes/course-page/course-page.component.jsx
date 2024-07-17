import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {
  AssignmentsAndQuizzesContainer,
  CoursePageContainer,
  CoursePageSectionHeader,
  FirstColumnContainer,
  SecondColumnContainer,
  SyllabusContainer
 } from './course-page.styles';

 import AssignmentQuizBox from '../../components/assignment-quiz-box/assignment-quiz-box.component'

 import ReactStyledProgressBar from '../../components/course-progress-bar/course-progress-bar.component';

 import DynamicIcon from '../../components/dynamic-icon.component';

 pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();




export const CoursePage = ({course}) => {

  const [ showPreview, toggleShowPreview ] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handlePreview = () => {
    // Open the preview in a new tab or window
    window.open(pdfPath, '_blank');
  };


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
          <CoursePageSectionHeader>Course Syllabus</CoursePageSectionHeader>
          <div>
            <DynamicIcon iconName='PictureAsPdf'/>
            <h3>Discrete Mathematics I Course Syllabus- Fall 2024</h3>
          </div>
          <div>
            <p /* onClick={() => toggleShowPreview(!showPreview)}*/ onClick={handlePreview}>Preview</p>
            {showPreview &&
            <Document file={pdfPath}><Page pageNumber={1}/><Page pageNumber={2}/></Document> }
            <p onClick={(e) => handleDownload('Discrete Mathematics I', e)}>Download</p>
          </div>
        </SyllabusContainer>
        <AssignmentsAndQuizzesContainer>
          <div>
            <CoursePageSectionHeader>Assignments And Quizzes</CoursePageSectionHeader>
            <div>
              <ReactStyledProgressBar now={50}/>
              <p>5/10 Completed</p>
            </div>
          </div>
          <AssignmentQuizBox status='missed' type='quiz'/>
        </AssignmentsAndQuizzesContainer>
      </FirstColumnContainer>
      <SecondColumnContainer>

      </SecondColumnContainer>
        
    </CoursePageContainer>
  )
}

