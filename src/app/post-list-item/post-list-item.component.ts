import {Component, Input, OnInit} from '@angular/core';
import {Post, PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() publication: Post;
  @Input() id: number;

  constructor(private _post: PostService) { }

  ngOnInit() {
  }

  love() {
    this._post.rate('+', this.id);
  }

  dontLove() {
    this._post.rate('-', this.id);
  }

  getRate() {
    return this._post.getStatus(this.publication);
  }

}
