import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SubredditComponent } from './subreddit/subreddit.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { CommentComponent } from './comment/comment.component';
import { TreeComponent } from './tree/tree.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';

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
