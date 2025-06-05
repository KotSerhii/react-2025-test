import {simpsons} from "../../data/simpsonsArray.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";


const FamilyComponent = () => {
    return (
        <div>{
            simpsons.map((value, index) => <CharacterComponent key={index} item={value}>
                {value.info}
            </CharacterComponent>)
        }
        </div>
    );
};

export default FamilyComponent;