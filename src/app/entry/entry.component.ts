import { Component, OnInit, Input } from '@angular/core';
import { Subreddit } from '../models/subreddit.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() subreddit: Subreddit;
  date: any

  constructor() { }

  ngOnInit() {
    this.cleanImage(this.subreddit.data.thumbnail)
    this.convertDate(this.subreddit.data.created)
  }

  private cleanImage(url: string) {
    if (!url || url == "self") {
      this.subreddit.data.thumbnail = "https://i.redd.it/rq36kl1xjxr01.png"
    }
  }
  private convertDate(date: number) {
    const dateFormatted = new Date(date * 1000);
    var hours = dateFormatted.getHours();
    var minutes = "0" + dateFormatted.getMinutes();
    var seconds = "0" + dateFormatted.getSeconds();
    this.date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
}
