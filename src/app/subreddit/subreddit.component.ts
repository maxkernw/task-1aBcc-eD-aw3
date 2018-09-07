import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditResponse } from '../models/redditResponse.model';
import { Subreddit } from '../models/subreddit.model';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  data: Subreddit[];
  main: Subreddit;
  query: string = "sweden";
  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.getData(this.query, 25)
  }

  update(value: string) {
    this.getData(value, 25)
    console.log(this.main)
  }
  limit(limit) {
    this.getData(this.query, limit)
  }

  private async getData(query: string, limit: number) {
    this.redditService.get<RedditResponse<Subreddit>>(query, limit).subscribe((response: RedditResponse<Subreddit>) => {
      this.main = response.data.children.shift();
      this.data = response.data.children
      
    })
  }

}
