import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditResponse } from '../models/redditResponse.model';
import { Subreddit } from '../models/subreddit.model';
import { Router } from '@angular/router';
import { Data } from '../storage.service';

const DEFAULT_LIMIT = 10;
const DEFAULT_SUBREDDIT = "sweden"

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  data: Subreddit[];
  query: string = DEFAULT_SUBREDDIT;
  after: string;
  before: string;
  limit: number = DEFAULT_LIMIT;
  title: string;
  loading: boolean;

  constructor(
    private redditService: RedditService,
    private router: Router,
    private subredditStorage: Data<Subreddit>) { }

  ngOnInit(): void {
    this.getData(this.query, DEFAULT_LIMIT)
  }

  update(value: string): void {
    this.query = value;
    this.getData(value, this.limit)
  }
  navigate(subreddit: Subreddit): void {
    this.subredditStorage.storage = subreddit;
    this.router.navigate([`/subreddit/${subreddit.data.subreddit_id}`])
  }

  next(): void {
    this.getData(this.query, this.limit, "next")
  }

  prev(): void {
    this.getData(this.query, this.limit, "prev")
  }

  limitresults(limit): void {
    this.limit = limit;
    this.getData(this.query, limit, "next")
  }

  private getData(query: string, limit: number, action?: string): void {
    this.loading = true;
    const afterPost = this.after ? `&after=${this.after}` : '';
    const beforePost = this.before ? `&before=${this.before}` : '';
    const url = `${query}.json?limit=${limit}${action === "prev" ? beforePost : afterPost}&count=100`

    this.redditService.getv2<RedditResponse<Subreddit>>(url).subscribe((response: RedditResponse<Subreddit>) => {
      const { children, after, before } = response.data;
      this.data = children
      this.after = after;
      this.before = before;
      this.title = `/r/${query}`
      this.loading = false;
    })
  }

}
