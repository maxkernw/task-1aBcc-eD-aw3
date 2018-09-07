export interface RedditResponse<T> {
    data: {
        children: Array<T>
    }
}