import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditResponse } from '../models/redditResponse.model';
import { Subreddit } from '../models/subreddit.model';
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
  error: boolean = false;

  constructor(
    private redditService: RedditService, private queryStorage: Data<{ query: string }>) { }

  ngOnInit(): void {
    this.query = this.queryStorage.storage ? this.queryStorage.storage.query : DEFAULT_SUBREDDIT
    this.getData(this.query, DEFAULT_LIMIT)
  }

  update(value: string): void {
    this.query = value;
    this.queryStorage.storage = { query: value };
    this.getData(value, this.limit)
  }

  next(): void {
    this.getData(this.query, this.limit, `&after=${this.after}`)
  }

  prev(): void {
    this.getData(this.query, this.limit, `&before=${this.before}`)
  }

  limitresults(limit): void {
    this.limit = limit;
    this.getData(this.query, limit)
  }

  private getData(query: string, limit: number, pagination?: string): void {
    this.loading = true;
    const url = `${query}.json?limit=${limit}&count=100${pagination}`

    this.redditService.get<RedditResponse<Subreddit>>(url).subscribe((response: RedditResponse<Subreddit>) => {

      const { children, after, before } = response.data;
      this.data = children
      this.after = after;
      this.before = before;
      this.title = `/r/${query}`
      this.loading = false;
      this.error = false;
    }, error => {
      this.loading = false;
      this.error = true;
      console.error(error);
    });
  }

}
