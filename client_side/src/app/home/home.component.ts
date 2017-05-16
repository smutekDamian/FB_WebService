import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  posts: Post[];

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService
      .getPosts()
      .then(posts => this.posts = posts);
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
