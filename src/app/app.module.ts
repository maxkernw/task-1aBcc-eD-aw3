import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// COMPONENTS
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
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
    TreeComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
