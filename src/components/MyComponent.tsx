import type {FC} from "react";
import './MyComponent.css';                       //підключення стандартного CSS
type MyComponentPropType = { text: string };

const MyComponent: FC<MyComponentPropType>=({text})=> {
    return <div className={'target'}>{text}</div>

}
export default MyComponent;