import type {ICourseModel} from "../models/courseModel.ts";
import type {FC} from "react";
import './CourseComponent.css';

type PropsType = {
    course: ICourseModel;
};

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course.title} {course.monthDuration}</li>
           );
};

