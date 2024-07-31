import { useState } from "react";
import { 
    TaskBoxContainer,
    TaskBoxHeader,
    TaskButtonContainer,
    TaskDescription
 } from "./assignment-quiz-component.styles";
import DynamicIcon from "../dynamic-icon.component";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

const CustomToggle = ({ status, eventKey, header }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
            <TaskBoxHeader
                onClick={decoratedOnClick}
            >
                <p>{header}</p>
                <p>{status === 'missed' && 'Overdue:'}{status === 'submitted' && 'Submitted:'}{status === 'upcoming' && 'Due:'} July 14, 2024</p>
            </TaskBoxHeader>
    );
  }
  

const AssignmentQuizComponent = ({ status, type, eventKey, taskName }) => {

    const taskDesc = 'Set Theory and Functions. Assess understanding of cardinality and bijections through questions on countable vs. uncountable sets and properties of injective, surjective, and bijective functions.';

    return (
        <TaskBoxContainer status = { status } >
            { status === 'missed' && <DynamicIcon iconName='Cancel' /> }
            { status === 'submitted' && <DynamicIcon iconName='CheckCircle' /> }
            { status === 'upcoming' && <DynamicIcon iconName='Upcoming' /> }
            <div>
                <Card.Header>
                    <CustomToggle eventKey={ eventKey } status = { status } header={ taskName }/>
                </Card.Header>
                <Accordion.Collapse eventKey={ eventKey }>
                    <Card.Body>
                        <TaskDescription>
                            {type === 'quiz' && 'Topic: '}{type === 'assignment' && 'Task: '}
                            {taskDesc}
                        </TaskDescription>
                        <TaskButtonContainer status = {status}>
                            {status === 'missed' && 
                            <>
                                <p style={{color: 'red'}}>Missed: July 14, 2024</p>
                                <div>
                                    <p>Contact Instructor</p>
                                    <DynamicIcon iconName='ArrowOutward'/>
                                </div>
                            </>
                            }
                            {status === 'submitted' && 
                            <>
                                <p style={{color: 'green'}}>Completed: July 14, 2024</p>
                                <p>Grade: 87%</p>
                            </>
                            }
                            {(status === 'upcoming' && type === 'assignment') &&
                            <>
                                <div>
                                    <DynamicIcon iconName='FileDownloadOutlined' />
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
                                    <Link to='/quiz'><p>START QUIZ</p></Link>
                                </div>
                                <div>
                                    <DynamicIcon iconName='AccessTime'/>
                                    <p>30:00</p>
                                </div>
                            </>
                            }
                        </TaskButtonContainer>
                    </Card.Body>
                </Accordion.Collapse>
                </div>
        </TaskBoxContainer>
    )
}

export default AssignmentQuizComponent;