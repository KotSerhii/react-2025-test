const baseUrls = {
    JsonPlaceholder:'https://jsonplaceholder.typicode.com',
    Dummyjson: 'https://dummyjson.com'
};

export const urls = {
    users:{
        allUsersFromJson: baseUrls.JsonPlaceholder+'/users',
        allUsersFromDummyJson: baseUrls.Dummyjson+'/users'
    },
    posts:{
        allPostsFromJson: baseUrls.JsonPlaceholder+'/posts',
        allPostsFromDummyJson: baseUrls.Dummyjson+'/posts'
    },
    comments:{
        allCommentsFromJson: baseUrls.JsonPlaceholder+'/comments',
        allCommentsFromDummyJson: baseUrls.Dummyjson+'/comments'
    }
}
