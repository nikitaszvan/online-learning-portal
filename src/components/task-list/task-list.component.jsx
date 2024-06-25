import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { 
    AddTaskButton,
    SortByButton,
    TaskListContainer,
    TaskListContent,
    TaskListGradient,
    TaskListHeader,
} from "./task-list.styles";

import { selectTasksMap } from '../../store/tasks/tasks.selector';
import TaskItem from '../task-item/task-item.component';
import DynamicIcon from "../dynamic-icon.component";


const TaskList = () => {

    const [ showTasksLimit, adjustTasksLimit ] = useState(3);
    const [isTaskListContentMounted, setIsTaskListContentMounted] = useState(false);
    const [taskListExpanded, expandTaskList] = useState(true);
    const tasksMap = useSelector(selectTasksMap);
    const contentRef = useRef(null);
    const [initialHeight, setInitialHeight] = useState(null);

    useEffect(() => {
        if (Object.entries(tasksMap).length > 0) {
            setIsTaskListContentMounted(true);
        }
    }, [tasksMap]);

    useEffect(() => {
        if (contentRef.current && isTaskListContentMounted && initialHeight === null) {
            setInitialHeight(contentRef.current.clientHeight);
        }

        if (initialHeight !== null) {
            const isCollapsedHeight = (initialHeight) / 5 * 3;
            const isExpandedHeight = initialHeight ;
            contentRef.current.style.height = showTasksLimit === 3 ? `${isCollapsedHeight}px` : `${isExpandedHeight}px`;
        }
    }, [isTaskListContentMounted, showTasksLimit, initialHeight]);

    const handleExpandClick = () => {
        expandTaskList(!taskListExpanded);
        adjustTasksLimit(showTasksLimit === 3 ? 5 : 3);
    };

    return (
    <TaskListContainer showgradient={ taskListExpanded }>
        <TaskListHeader>
        <h2>Tasks</h2>
        <SortByButton>
            <DynamicIcon iconName='Checklist'/>
            <p>Sort by</p>
        </SortByButton>
        <AddTaskButton>
            <DynamicIcon iconName='ControlPoint'/>
        </AddTaskButton>
        </TaskListHeader>
    <TaskListContent ref={contentRef}>
      <TaskListGradient showgradient={ taskListExpanded }/>
      {Object.entries(tasksMap)?.map(([key, task]) => 
      <TaskItem key={key} task={task} />) 
      }
    </TaskListContent>
    <DynamicIcon iconName='KeyboardArrowDown' onclick={handleExpandClick}/>
  </TaskListContainer>

);
}

export default TaskList;