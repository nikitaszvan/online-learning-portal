import {
    GradeEntryContainer
} from './grade-entry.styles';


const GradeEntry = ({ taskName, awardedGrade, taskWeight }) => {
    return (
        <GradeEntryContainer>
            <p>{taskName}</p>
            <p>{awardedGrade}</p>
            <p>{taskWeight}</p>
        </GradeEntryContainer> 
    )
}

export default GradeEntry;