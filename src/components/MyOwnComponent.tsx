import type {FC} from "react";
import styles from './MyOwnComponent.module.css'; //  підключення модульного CSS

type MyComponentPropType = { text: string };
const MyOwnComponent:FC<MyComponentPropType> = ({text}) => {
    return (
        <div className={styles.special}>
            {text}
        </div>
    );
};

export default MyOwnComponent;