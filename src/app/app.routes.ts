import { Routes } from '@angular/router';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
    { path: 'subreddit', component: SubredditComponent },
    { path: 'subreddit/:sub', component: DetailComponent },
    { path: '**', component: SubredditComponent }
] 