import { Component, OnInit } from '@angular/core';
import { Data } from '../storage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  comments: Comment[];
  post: Comment[];
  loading: boolean = true;

  public constructor(private route: ActivatedRoute, private router: Router, private redditService: RedditService) { }

  ngOnInit(): void {
    const { sub } = this.route.snapshot.params
    this.route.queryParams.subscribe((data: Params) => {
      this.getData(sub, data.id)
    })
  }

  getData(subreddit: string, id: string): void {
    const url = `${subreddit}/comments/${id}.json`

    this.redditService.get<Array<RedditResponse<Comment>>>(url)
      .subscribe(data => {
        this.post = data[0].data.children
        this.comments = data[1].data.children;
        this.loading = false;
      })
  }
}
