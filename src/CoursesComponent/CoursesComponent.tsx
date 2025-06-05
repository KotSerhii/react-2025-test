import './CoursesComponenet.css'
import type {ICourseModel} from "../models/courseModel.ts";
import {CourseComponent} from "../CourseComponent/CourseComponenet.tsx";
import {coursesAndDurationArray} from "../data/coursesAndDurationArray.ts";

const CoursesComponent = () => {
    return (
        <ul>{
            coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                return <CourseComponent course={course} key={index}/>;
            })
        }
        </ul>
    );
};

export default CoursesComponent;