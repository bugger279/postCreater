import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: [
    './post-list.component.css'
]
})
export class PostListComponent {
  // posts = [
  //   {title: 'Post One', content: 'Post\'s Content One'},
  //   {title: 'Post Two', content: 'Post\'s Content Two'},
  //   {title: 'Post Three', content: 'Post\'s Content Three'}
  // ];
  @Input() posts = [];
}
