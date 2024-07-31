import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import AnnouncementPicture from '../../assets/th.jpeg';
import { 
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Line,
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
  CustomTooltipStyled,
  FirstColumnContainer,
  GradesContainer,
  GradeColumnHeading,
  GradesHeader,
  LineChartContainer,
  ProgressBar,
  SecondColumnContainer,
  SyllabusButtonContainer,
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
  const fullDivRef = useRef(null);
  
  const [divWidth, setDivWidth] = useState(null);

  useEffect(() => {
      const calculateDivWidth = () => {
          if (divRef.current) {
            setDivWidth(divRef.current.clientWidth);
          }
      };
      const observer = new ResizeObserver(entries => {

        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          handleResize();
        }
      });

      if (fullDivRef.current) {
        observer.observe(fullDivRef.current);
      }

      calculateDivWidth();

      const handleResize = () => {
          calculateDivWidth();
      };

      // window.addEventListener('resize', handleResize);

      return () => {
          // window.removeEventListener('resize', handleResize);
          observer.disconnect();
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

  const sampleParagraph1 = `We are excited to embark on a journey through the fascinating realm of Discrete Mathematics this semester. This course will delve into foundational concepts essential for computer science and mathematics, offering a rigorous exploration of topics such as set theory, logic, graph theory, and combinatorics. Throughout the semester, you will sharpen your problem-solving skills through challenging assignments and interactive discussions. Our goal is to equip you with the theoretical knowledge and practical skills necessary to tackle complex computational problems and analyze real-world scenarios.`;

  const sampleParagraph2 = `As you navigate this course, we encourage you to actively engage with the material, collaborate with your peers, and seek support from our dedicated faculty. We look forward to witnessing your growth and success in mastering Discrete Mathematics. Together, let's make this semester an enriching and rewarding academic experience. Welcome aboard, and let's embark on this mathematical journey together. Warm regards, Ainsley (Mathematics Faculty)`;

  const data = [
    {
      name: 'Assignment 1',
      grade: 85,
      weight: 15,
    },
    {
      name: 'Quiz 1',
      grade: 92,
      weight: 10,
    },
    {
      name: 'Assignment 2',
      grade: 88,
      weight: 20,
    },
    {
      name: 'Quiz 2',
      grade: 88,
      weight: 12,
    },
    {
      name: 'Assignment 3',
      grade: 90,
      weight: 18,
    },
    {
      name: 'Quiz 3',
      grade: 95,
      weight: 25
    },
  ];

  const calculatedAverageGrade = () => {
    const weightedScore = data.map(item => (item.grade/100 * item.weight/100));
    const weights = data.map(item => item.weight/100);
    const sumWeights = weights.reduce((acc, weights) => acc + weights, 0);
    const sumWeightedScore = weightedScore.reduce((acc, weightedScore) => acc + weightedScore, 0);
    return Math.round((sumWeightedScore / sumWeights) * 100);
  }
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltipStyled>
          <p className="label">{`${label}`}</p>
          <p className="grade">{`Grade: ${payload[0].value}%`}</p>
          <p className="weight">{`Weight: ${payload[1].value}%`}</p>
        </CustomTooltipStyled>
      );
    }
  
    return null;
  };

  return (
    <CoursePageContainer ref={ fullDivRef }>
      <FirstColumnContainer >
        <SyllabusContainer>
          <CoursePageSectionHeader>Course Syllabus</CoursePageSectionHeader>
          <div>
            <DynamicIcon iconName='PictureAsPdf'/>
            <h3>Discrete Mathematics I Course Syllabus- Fall 2024</h3>
          </div>
          <SyllabusButtonContainer>
            <p /* onClick={() => toggleShowPreview(!showPreview)}*/ onClick={handlePreview}>Preview</p>
            {showPreview &&
            <Document file={pdfPath}><Page pageNumber={1}/><Page pageNumber={2}/></Document> }
            <p onClick={(e) => handleDownload('Discrete Mathematics I', e)}>Download</p>
          </SyllabusButtonContainer>
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
            <AssignmentQuizComponent status='missed' type='quiz' eventKey='2' taskName='Quiz #2'/>
            <AssignmentQuizComponent status='upcoming' type='quiz' eventKey='3' taskName='Quiz #1'/>
            <AssignmentQuizComponent status='submitted' type='assignment' eventKey='4' taskName='Assignment #2'/>
            <AssignmentQuizComponent status='missed' type='assignment' eventKey='5' taskName='Assignment #1'/>
          </AssignmentsAndQuizzesListContainer>
        </AssignmentsContainer>
        <GradesContainer>
          <GradesHeader>
            <CoursePageSectionHeader>Grades</CoursePageSectionHeader>
            <button onClick={() => toggleGradeFormat(!gradeList)}>{ gradeList ? <DynamicIcon iconName='AutoGraph'/> : <DynamicIcon iconName='MenuOutlined'/> }</button>
          </GradesHeader>
          <p>Current Grade: {calculatedAverageGrade()}%</p>
          {gradeList ?
          <>     
            <GradeColumnHeading>
              <p>Name</p>
              <p>Grade</p>
              <p>Weight</p>
            </GradeColumnHeading>
            {data.map((task, index) => {
              const { name, grade, weight } = task;
              return <GradeEntry key={ index } taskName={ name } awardedGrade={ `${grade}%` } taskWeight={ `${weight}%` } />;
            })}
          </>
: 
            <LineChart width={divWidth} height={350} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(tick) => {return `${tick}%`;}}/>
              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="grade" stroke="#ff7300" yAxisId={0} />
              <Line type="monotone" dataKey="weight" stroke="#ff7300" strokeWidth={0} yAxisId={0} activeDot={{ r: 0 }}/>
            </LineChart>
}

        </GradesContainer>    
        
      </FirstColumnContainer>
      <SecondColumnContainer ref={ divRef }>
        <CoursePageSectionHeader>Recent Announcements</CoursePageSectionHeader>
        <AnnouncementContainer>
          <AnnouncementHeader>Welcome to Discrete Mathematics I for the Fall Term!</AnnouncementHeader>
          <AnnouncementImage imageUrl='https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='annoucement'/>
          <AnnouncementParagraph>{ sampleParagraph1 }</AnnouncementParagraph>
          <AnnouncementParagraph>{ sampleParagraph2 }</AnnouncementParagraph>
          <p>End of Announcements</p>
        </AnnouncementContainer>
      </SecondColumnContainer>
    </CoursePageContainer>
  )
}

