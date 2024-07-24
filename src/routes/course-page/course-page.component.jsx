import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import AnnouncementPicture from '../../assets/th.jpeg';
import { 
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line 
} from 'recharts';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {
  AnnouncementContainer,
  AnnouncementHeader,
  AnnouncementImage,
  AnnouncementParagraph,
  AssignmentsAndQuizzesListContainer,
  AssignmentsContainer,
  AssignmentsHeaderContainer,
  CoursePageContainer,
  CoursePageSectionHeader,
  FirstColumnContainer,
  GradesContainer,
  GradeColumnHeading,
  GradesHeader,
  LineChartContainer,
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
  const [ gradeList, toggleGradeFormat ] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(null); 

  useEffect(() => {
      const calculateDivWidth = () => {
          if (divRef.current) {
            setDivWidth(divRef.current.clientWidth);
          }
      };

      calculateDivWidth();

      const handleResize = () => {
          calculateDivWidth();
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };

  }, []); 

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

  const sampleParagraph = `We are excited to embark on a journey through the fascinating realm of Discrete Mathematics this semester. This course will delve into foundational concepts essential for computer science and mathematics, offering a rigorous exploration of topics such as set theory, logic, graph theory, and combinatorics. Throughout the semester, you will sharpen your problem-solving skills through challenging assignments and interactive discussions. Our goal is to equip you with the theoretical knowledge and practical skills necessary to tackle complex computational problems and analyze real-world scenarios.
As you navigate this course, we encourage you to actively engage with the material, collaborate with your peers, and seek support from our dedicated faculty. We look forward to witnessing your growth and success in mastering Discrete Mathematics. Together, let's make this semester an enriching and rewarding academic experience. Welcome aboard, and let's embark on this mathematical journey together. Warm regards, Ainsley (Mathematics Faculty)`;

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <CoursePageContainer>
      <FirstColumnContainer >
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
            <button onClick={() => toggleGradeFormat(!gradeList)}><DynamicIcon iconName='AutoGraph'/></button>
          </GradesHeader>
          <p>Current Grade: 90%</p>
          {gradeList ?
          <>     
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
          </>
: 
            <LineChart width={divWidth} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <XAxis dataKey="name" />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            </LineChart>
}

        </GradesContainer>    
        
      </FirstColumnContainer>
      <SecondColumnContainer ref={ divRef }>
        <CoursePageSectionHeader>Recent Announcements</CoursePageSectionHeader>
        <AnnouncementContainer>
          <AnnouncementHeader>Welcome to Discrete Mathematics I for the Fall Term!</AnnouncementHeader>
          <AnnouncementImage imageUrl={ AnnouncementPicture } alt='annoucement'/>
          <AnnouncementParagraph>{ sampleParagraph }</AnnouncementParagraph>
        </AnnouncementContainer>
      </SecondColumnContainer>
    </CoursePageContainer>
  )
}

