import type {FC} from "react";

type MyComponentPropType = { text: string };
const MyOwnComponent:FC<MyComponentPropType> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default MyOwnComponent;