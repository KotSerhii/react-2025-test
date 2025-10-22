const baseUrl = "http://jsonplaceholder.typicode.com";

export const urls ={
    users: {
        allUsers:baseUrl+'/users',

        byID: (id: number) => {
        return baseUrl+'/'+id}
        },

    posts:{
        allUsers:baseUrl+'/posts',
        byID: (id: number) => baseUrl+'/'+id,
        userPostsByID: (id: number) => baseUrl+'/posts?userId='+id,
    }
    };