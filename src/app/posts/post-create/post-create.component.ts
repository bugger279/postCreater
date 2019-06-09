import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: [
    './post-create.component.css'
  ]
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  newPost = 'No Content';

  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const posts = {title: this.enteredTitle, content: this.enteredContent};
    this.postCreated.emit(posts);
  }
}

