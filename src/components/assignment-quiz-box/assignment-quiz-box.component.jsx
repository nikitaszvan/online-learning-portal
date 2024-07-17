import { 
    TaskBoxContainer,
    TaskBoxHeader,
    TaskButtonContainer,
    TaskDescription
 } from "./assignment-quiz-box.styles";
import DynamicIcon from "../dynamic-icon.component";

const AssignmentQuizBox = ({ status, type }) => {

    const taskDesc = 'Set Theory and Functions. Assess understanding of cardinality and bijections through questions on countable vs. uncountable sets and properties of injective, surjective, and bijective functions.';
    return (
        <TaskBoxContainer status = { status }>
            {status === 'missed' && <DynamicIcon iconName='Cancel'/>}
            {status === 'submitted' && <DynamicIcon iconName='CheckCircle'/>}
            {status === 'upcoming' && <DynamicIcon iconName='Upcoming'/>}
            <div>
                <TaskBoxHeader>
                    <p>Quiz #2</p>
                    <p>{status === 'missed' && 'Overdue:'}{status === 'submitted' && 'Submitted:'}{status === 'upcoming' && 'Due:'} July 14, 2024</p>
                </TaskBoxHeader>
                <TaskDescription>
                    {type === 'quiz' && 'Topic: '}{type === 'assignment' && 'Task: '}
                    {taskDesc}
                </TaskDescription>
                <TaskButtonContainer>
                    {status === 'missed' && 
                    <>
                        <p>Missed: July 14, 2024</p>
                        <div>
                            <p>Contact Instructor</p>
                            <DynamicIcon iconName='ArrowOutward'/>
                        </div>
                    </>
                    }
                    {status === 'submitted' && 
                    <>
                        <p>'Completed: July 14, 2024'</p>
                        <p>Grade: 87%</p>
                    </>
                    }
                    {(status === 'upcoming' && type === 'assignment') &&
                    <>
                        <div>
                            <DynamicIcon iconName='FileDownloadOutlined'/>
                            <p>Assignment_3_Instructions.pdf</p>
                        </div>
                        <div>
                            <DynamicIcon iconName='UploadFileOutlined'/>
                            <p>UPLOAD FILE</p>
                        </div>
                    </>
                    }
                    {(status === 'upcoming' && type === 'quiz') &&
                    <>
                        <div>
                            <DynamicIcon iconName='PlayCircleFilledWhiteOutlined'/>
                            <p>START QUIZ</p>
                        </div>
                        <div>
                            <DynamicIcon iconName='UploadFileOutlined'/>
                            <p>UPLOAD FILE</p>
                        </div>
                    </>
                    }
                </TaskButtonContainer>
            </div>
        </TaskBoxContainer>
    )
}

export default AssignmentQuizBox;