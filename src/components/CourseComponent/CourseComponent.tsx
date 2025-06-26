import type {FC} from 'react';
import type {ICourse} from "../../models/ICourse";

type MyPropsType={
    course: ICourse;
}
const CourseComponent:FC<MyPropsType>=({course})=>{
    return(
  <div className='border rounded-md bg-orange-200 p-4 my-4'>
<h2 className='text-xl font-bold mb-2'>Course name is {course.title}</h2>
<p className='text-lg mb-1'>Duration: {course.monthDuration} / {course.hourDuration} hours</p>
      <ul className='list-disc ml-5'>
          {course.modules.map((module, index)=>
              <li className='text-left' key={index}>{module}</li>)}
      </ul>
  </div>
    )
};
export default CourseComponent;
