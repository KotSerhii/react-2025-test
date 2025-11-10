const baseUrls = {
    JsonPlaceholder:'https://jsonplaceholder.typicode.com',
    Dummyjson: 'https://dummyjson.com'
};

export const urls = {
    users:{
        allUsersFromJson: baseUrls.JsonPlaceholder+'/users',
        allUsersFromDummyjson: baseUrls.Dummyjson+'/users'
    },
    posts:{
        allPostsFromJson: baseUrls.JsonPlaceholder+'/posts',
        allPostsFromDummyjson: baseUrls.Dummyjson+'/posts'
    },
    comments:{
        allCommentsFromJson: baseUrls.JsonPlaceholder+'/comments',
        allCommentsFromDummyjson: baseUrls.Dummyjson+'/comments'
    }
}
