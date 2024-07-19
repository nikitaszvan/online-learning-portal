import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {
  AssignmentsAndQuizzesListContainer,
  AssignmentsContainer,
  AssignmentsHeaderContainer,
  CoursePageContainer,
  CoursePageSectionHeader,
  FirstColumnContainer,
  GradesContainer,
  GradeColumnHeading,
  GradesHeader,
  ProgressBar,
  SecondColumnContainer,
  SyllabusContainer
 } from './course-page.styles';

 import GradeEntry from '../../components/grade-entry/grade-entry.component';
 import AssignmentQuizComponent from '../../components/assignment-quiz-component/assignment-quiz-component.component';
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
        <AssignmentsContainer>
          <AssignmentsHeaderContainer>
            <CoursePageSectionHeader>Assignments And Quizzes</CoursePageSectionHeader>
            <div>
              <ProgressBar now={50}/>
              <p>5/10 Completed</p>
            </div>
          </AssignmentsHeaderContainer>
          <AssignmentsAndQuizzesListContainer defaultActiveKey="0">
            <AssignmentQuizComponent status='upcoming' type='assignment' eventKey='0' taskName='Assignment #3'/>
            <AssignmentQuizComponent status='missed' type='quiz' eventKey='1' taskName='Quiz #2'/>
            <AssignmentQuizComponent status='upcoming' type='quiz' eventKey='2' taskName='Quiz #1'/>
            <AssignmentQuizComponent status='submitted' type='assignment' eventKey='3' taskName='Assignment #2'/>
            <AssignmentQuizComponent status='missed' type='assignment' eventKey='4' taskName='Assignment #1'/>
          </AssignmentsAndQuizzesListContainer>
        </AssignmentsContainer>
        <GradesContainer>
          <GradesHeader>
            <CoursePageSectionHeader>Grades</CoursePageSectionHeader>
            <DynamicIcon iconName='AutoGraph'/>
          </GradesHeader>
          <p>Current Grade: 90%</p>
          <GradeColumnHeading>
            <p>Name</p>
            <p>Grade</p>
            <p>Weight</p>
          </GradeColumnHeading>
          <GradeEntry taskName='Assignment #1' awardedGrade='85%' taskWeight='10%'/>
          <GradeEntry taskName='Assignment #2' awardedGrade='85%' taskWeight='10%'/>
          <GradeEntry taskName='Assignment #3' awardedGrade='85%' taskWeight='10%'/>
          <GradeEntry taskName='Quiz #1' awardedGrade='85%' taskWeight='10%'/>
          <GradeEntry taskName='Quiz #2' awardedGrade='85%' taskWeight='10%'/>
        </GradesContainer>
      </FirstColumnContainer>
      <SecondColumnContainer>

      </SecondColumnContainer>
        
    </CoursePageContainer>
  )
}

