import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

// COMPONENTS
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { CommentComponent } from './components/comment/comment.component';
import { TreeComponent } from './components/tree/tree.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { EntryComponent } from './components/entry/entry.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SubredditComponent,
    DetailComponent,
    CommentComponent,
    TreeComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
