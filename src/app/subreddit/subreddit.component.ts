import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditResponse } from '../models/redditResponse.model';
import { Subreddit } from '../models/subreddit.model';
import { Router } from '@angular/router';
import { Data } from '../storage.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  data: Subreddit[];
  main: Subreddit;
  query: string = "sweden";

  constructor(private redditService: RedditService, private router: Router, private subredditStorage: Data<Subreddit>) { }

  ngOnInit() {
    this.getData(this.query, 25)
  }

  update(value: string) {
    this.query = value;
    this.getData(value, 25)
  }
  navigate(subreddit: Subreddit) {
    this.subredditStorage.storage = subreddit;
    this.router.navigate([`/subreddit/${subreddit.data.subreddit_id}`])
  }

  limit(limit) {
    this.getData(this.query, limit)
  }

  private getData(query: string, limit: number) {
    this.redditService.get<RedditResponse<Subreddit>>(query, limit).subscribe((response: RedditResponse<Subreddit>) => {
      // Shift first entry since it is the "description" of the subReddit
      this.main = response.data.children.shift();
      this.data = response.data.children
    })
  }

}
