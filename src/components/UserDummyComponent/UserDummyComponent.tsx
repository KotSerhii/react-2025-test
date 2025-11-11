import type {FC} from "react";
import type {IUserDummyjson} from "../../models/Dummyjson/IUserDummyjson";


type UserPropsType = {
    item: IUserDummyjson;
}

const UserDummyComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div>
            <img src={item.image} alt={item.image}/>
            <ul>

                <li>"firstName": {item.firstName}</li>
                <li>"lastName": {item.lastName}</li>
                <li>"maidenName": {item.maidenName}</li>
                <li>"age": {item.age}</li>
                <li>"gender": {item.gender}</li>
                <li>"email":{item.email}</li>
                <li>"phone":{item.phone}</li>
                <li>"username":{item.username}</li>
                <li>"password":{item.password}</li>
                <li>"birthDate":{item.birthDate}</li>
                <li>"bloodGroup":{item.bloodGroup} </li>
                <li>"height":{item.height}</li>
                <li>"weight":{item.weight}</li>
                <li>"eyeColor":{item.eyeColor}</li>
                <ul>"hair":
                    <li>"color": {item.hair.color}</li>
                    <li>"type":{item.hair.type} </li>
                </ul>
                <li>"ip":{item.ip} </li>
                <ol>"address":
                    <li>"address": {item.address.address}</li>,
                    <li>"city": {item.address.city}</li>
                    <li>"state": {item.address.state}</li>
                    <li>"stateCode":{item.address.stateCode} </li>
                    <li>"postalCode":{item.address.postalCode}</li>
                    <ul>"coordinates":
                        <li>"lat": {item.address.coordinates.lat}</li>
                        <li>"lng": {item.address.coordinates.lng}</li>
                    </ul>
                    <li>"country": {item.address.country}</li>
                </ol>
                <li>"macAddress": {item.macAddress}</li>
                <li>"university": {item.university}</li>
                <ol>"bank":
                    <li>"cardExpire": {item.bank.cardExpire}</li>
                    <li>"cardNumber": {item.bank.cardNumber}</li>
                    <li>"cardType": {item.bank.cardType}</li>
                    <li>"currency":{item.bank.currency} </li>
                    <li>"iban": {item.bank.iban}</li>
                </ol>
                <ol>"company":
                    <li>"department":{item.company.department}</li>
                    <li>"name": {item.company.name}</li>
                    ,
                    <li>"title": {item.company.title}</li>
                    <ul>"address":
                        <li>"address":{item.company.address.address} </li>
                        <li>"city": {item.company.address.city}</li>
                        <li>"state": {item.company.address.state}</li>
                        <li>"stateCode": {item.company.address.stateCode}</li>
                        <li>"postalCode":{item.company.address.postalCode} </li>
                        <ol>"coordinates":
                            <li>"lat": {item.company.address.coordinates.lat}</li>
                            <li>"lng": {item.company.address.coordinates.lng}</li>

                        </ol>
                        <li>"country": {item.company.address.country}</li>
                    </ul>
                </ol>
                <li>"ein": {item.ein}</li>
                <li>"ssn": {item.ssn}</li>
                <li>"userAgent": {item.userAgent}</li>
                <ol>"crypto":
                    <li>"coin": {item.crypto.coin}</li>
                    <li>"wallet": {item.crypto.wallet}</li>
                    <li>"network": {item.crypto.network}</li>
                </ol>
                <li>"role": {item.role}</li>
            </ul>

        </div>
    );
};

export default UserDummyComponent;