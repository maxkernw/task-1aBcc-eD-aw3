import { Routes } from '@angular/router';
import { SubredditComponent } from './subreddit/subreddit.component';
import { DetailComponent } from './detail/detail.component';

export const appRoutes: Routes = [
    { path: 'subreddit', component: SubredditComponent },
    { path: 'subreddit/:sub', component: DetailComponent },
    { path: '**', component: SubredditComponent }
] 