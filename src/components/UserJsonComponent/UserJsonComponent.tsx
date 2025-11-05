import type { FC } from "react";
import type { IUserJson } from "../../models/Jsonplaceholder/IUserJson";



type UserJsonPropType={
    item: IUserJson;
}

const UserJsonComponent:FC<UserJsonPropType> = ({item}) => {
    return (
        <div>
            <p>{'id:'} {item.id}</p>
            <p>{'name:'} {item.name}</p>
            <p>{'username:'} {item.username}</p>
            <p>{'email:'} {item.email}</p>
            <ol>{'address:'}
                <li>{'street'} - {item.address.street}</li>
                <li>{'suite'} - {item.address.suite}</li>
                <li>{'city'} - {item.address.city}</li>
                <li>{'zipcode'} - {item.address.zipcode}</li>
                <ol>{'Geo:'}
                    <li>{'lat:'} - {item.address.geo.lng}</li>
                    <li>{'lng:'} - {item.address.geo.lat}</li>
                </ol>
            </ol>
            <p>{'phone:'} {item.phone}</p>
            <p>{'website:'} {item.website}</p>
            <ol>{'company:'}
                <li> {'name'} - {item.company.name}</li>
                <li> {'bs'} - {item.company.bs}</li>
                <li> {'catchPhrase'} - {item.company.catchPhrase}</li>
            </ol>
        </div>
    );
};

export default UserJsonComponent;