import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { 
    TaskListContainer,
    TaskListContent,
    TaskListGradient,
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (Object.keys(tasksMap).length > 0) {
        setLoading(false);
      }

    }, [tasksMap]);

    const renderPlaceholders = () => {
      return Array.from({ length: 3 }).map((_, index) => (
            <TaskItem key={_} />) 
      );
    };

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
        <TaskListContent ref={contentRef}>
        <TaskListGradient showgradient={ taskListExpanded }/>
        {loading ? renderPlaceholders(): 
        Object.entries(tasksMap)?.map(([key, task]) => 
        <TaskItem key={key} task={task} />) 
        }
        </TaskListContent>
        <button onClick={handleExpandClick}><DynamicIcon iconName='KeyboardArrowDown' /></button>
  </TaskListContainer>
    );
}

export default TaskList;