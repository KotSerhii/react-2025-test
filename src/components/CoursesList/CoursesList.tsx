import CourseComponent from "../CourseComponent/CourseComponent";
import {coursesArray} from '../../data/CoursesArray';


const CoursesList = () => {
    return (
        <div>
            {
                coursesArray.map((course, index) => <CourseComponent key={index} course={course}/>)
            }
        </div>
    );
};

export default CoursesList;