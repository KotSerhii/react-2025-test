import type {FC} from 'react';
import type {ICourse} from "../../models/ICourse";

type MyPropsType={
    course: ICourse;
}
const CourseComponent:FC<MyPropsType>=({course})=>{
    return(
  <div>
<h2>Course name is {course.title}</h2>
<p>Duration: {course.monthDuration} / {course.hourDuration} hours</p>
      <ul>
          {course.modules.map((module, index)=>
              <li key={index}>{module}</li>)}
      </ul>
  </div>
    )
};
export default CourseComponent;
