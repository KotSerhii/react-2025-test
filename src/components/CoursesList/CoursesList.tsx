import CourseComponent from "../CourseComponent/CourseComponent";
import {coursesArray} from '../../data/CoursesArray';


const CoursesList = () => {
    return (
        <div className='p-16'>
            {
                coursesArray.map((course, index) => <CourseComponent key={index} course={course}/>)
            }
        </div>
    );
};

export default CoursesList;