import type { IReqResInResponse } from "../models/IReqResInResponse"

export const getAllUsers = async (pg:string):Promise<IReqResInResponse> => (
        await fetch('https://reqres.in/api/users?page='+pg, {
            method: 'GET',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }}).then(value => value.json())

)