import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RedditService } from '../../services/reddit.service';
import { RedditResponse } from '../../models/redditResponse.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  selftext: string;
  comments: Comment[];
  post: Comment[];
  loading = true;
  error = false;

  public constructor(private route: ActivatedRoute, private redditService: RedditService) { }

  ngOnInit(): void {
    const { sub } = this.route.snapshot.params;
    this.route.queryParams.subscribe((data: Params) => {
      this.getData(sub, data.id);
    });
  }

  getData(subreddit: string, id: string): void {
    this.redditService.get<Array<RedditResponse<Comment>>>(`${subreddit}/comments/${id}.json`)
      .subscribe(data => {
        this.post = data[0].data.children;
        this.comments = data[1].data.children;
        this.loading = false;
        this.error = false;
      },
      error => {
        this.error = true;
        console.error(error);
      });
  }
}
