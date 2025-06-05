import './CharacterComponent.css'
import type {ICharacter} from "../../models/ICharacter.ts";
import type {FC, ReactNode} from "react";


interface CharacterComponentProps {
    item: ICharacter;
    children: ReactNode
}

export const CharacterComponent: FC<CharacterComponentProps> = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-2 bg-blue-300'>
            <h2 className='text-7xl my-3'>{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name} />
            <p className='text-4xl'>{children}</p>
        </div>
    );
};

export default CharacterComponent;