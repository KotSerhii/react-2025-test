import type {FC, ReactNode} from "react";
import './MyComponent.css';                       //підключення стандартного CSS
type MyComponentPropType = {                     //такий запис вимагає, щоб компонент був розгорнутий (або можемо використати Елвіса)
    title: string;
    children?: ReactNode;
};

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return <div className={'target'}>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>

}
export default MyComponent;