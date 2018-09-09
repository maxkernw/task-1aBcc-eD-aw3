import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['../detail/detail.component.css']
})
export class TreeComponent {
  @Input() node;
}
