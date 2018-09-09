import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { RedditResponse } from '../../models/redditResponse.model';
import { Subreddit } from '../../models/subreddit.model';
import { Data } from '../../services/storage.service';

const DEFAULT_LIMIT = 10;
const DEFAULT_SUBREDDIT = "sweden"

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  data: Subreddit[];
  after: string;
  before: string;
  title: string;
  loading: boolean;
  error: boolean = false;
  
  query: string = DEFAULT_SUBREDDIT;
  limit: number = DEFAULT_LIMIT;

  constructor(
    private redditService: RedditService, private queryStorage: Data<{ query: string }>) { }

  ngOnInit(): void {
    this.query = this.queryStorage.storage ? this.queryStorage.storage.query : DEFAULT_SUBREDDIT
    this.getData()
  }

  update(value: string): void {
    this.query = value;
    this.queryStorage.storage = { query: value };
    this.getData()
  }

  next(): void {
    this.getData(`&after=${this.after}`)
  }

  prev(): void {
    this.getData(`&before=${this.before}`)
  }

  limitresults(limit): void {
    this.limit = limit;
    this.getData()
  }

  private getData(pagination?: string): void {
    this.loading = true;
    const url = `${this.query}.json?limit=${this.limit}&count=100${pagination}`

    this.redditService.get<RedditResponse<Subreddit>>(url).subscribe((response: RedditResponse<Subreddit>) => {

      const { children, after, before } = response.data;
      this.data = children
      this.after = after;
      this.before = before;
      this.title = `/r/${this.query}`

      this.loading = false;
      this.error = false;
    }, error => {
      this.loading = false;
      this.error = true;
      console.error(error);
    });
  }

}
