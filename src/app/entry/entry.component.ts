import { Component, OnInit, Input } from '@angular/core';
import { Subreddit } from '../models/subreddit.model';
import { isUrl } from '../helpers/isUrl.helper';
import { Router } from '@angular/router';
import { Data } from '../storage.service';
const fallbackImage = "../../../assets/fallback.png"

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() subreddit: Subreddit;
  created: number;
  thumbnail: string;
  title: string;
  author: string;
  permalink: string;
  score: string;
  num_comments: number;
  id: string;

  constructor(private router: Router, private subredditStorage: Data<Subreddit> ) { }

  ngOnInit() {
    const { thumbnail,
      created,
      title,
      permalink,
      score,
      num_comments,
      author, id } = this.subreddit.data;

    this.thumbnail = isUrl(thumbnail) ? thumbnail : fallbackImage;
    this.created = created;
    this.title = title;
    this.permalink = `https://reddit.com${permalink}`
    this.score = score;
    this.num_comments = num_comments;
    this.author = author;
    this.id = id
    console.log(this.subreddit.data)
  }

  navigate(): void {
    this.subredditStorage.storage = this.subreddit;
    this.router.navigate([`/subreddit/${this.subreddit.data.subreddit_id}`])
  }
}
