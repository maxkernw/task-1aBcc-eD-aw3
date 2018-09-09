export interface RedditResponse<T> {
    data: {
        children: Array<T>;
        after: string;
        before: string;
        kind: string
    }
}