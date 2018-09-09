import { RedditResponse } from './redditResponse.model';

export interface Comment {
    author: string;
    thumbnail: string;
    replies: RedditResponse<Comment>;
    body: string;
}