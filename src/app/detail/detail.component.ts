import { Component, OnInit } from '@angular/core';
import { Data } from '../storage.service';
import { Router } from '@angular/router';
import { Subreddit } from '../models/subreddit.model';
import { RedditService } from '../reddit.service';
import { RedditResponse } from '../models/redditResponse.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  selftext: string;
  id: string;
  comments: any;
  post: any;
  loading: boolean = true;

  public constructor(private data: Data<Subreddit>, private router: Router, private redditService: RedditService) { }

  ngOnInit() {
    if (this.data.storage == null) {
      this.router.navigate(["subreddit"])
    }
    const { selftext, id } = this.data.storage.data;
    this.id = id;
    this.selftext = selftext != "" ? selftext : "no data";
    this.getData();
  }

  getData(): void {
    this.redditService.getDetail<Array<RedditResponse<Comment>>>("sweden", this.id).subscribe((data) => {
      this.post = data[0].data.children
      this.comments = data[1].data.children;
      console.log(this.post);
      this.loading = false;
    });
  }

}
