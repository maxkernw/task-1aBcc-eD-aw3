import { Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { SubredditComponent } from './subreddit/subreddit.component';

export const appRoutes: Routes = [
    { path: 'subreddit', component: SubredditComponent },
    { path: 'subreddit/:id',      component: EntryComponent },
] 