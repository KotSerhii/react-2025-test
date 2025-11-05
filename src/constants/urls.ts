const baseUrls = {
    JsonPlaceholder:'https://jsonplaceholder.typicode.com',
    Dummyjson: 'https://dummyjson.com'
};

export const users={
    allUsersFromJson: baseUrls.JsonPlaceholder+'/users',
    allUsersFromDummyJson: baseUrls.Dummyjson+'/users'
}
export const posts={
    allPostsFromJson: baseUrls.JsonPlaceholder+'/posts',
    allPostsFromDummyJson: baseUrls.Dummyjson+'/posts'
}
export const comments={
    allCommentsFromJson: baseUrls.JsonPlaceholder+'/comments',
    allCommentsFromDummyJson: baseUrls.Dummyjson+'/comments'
}