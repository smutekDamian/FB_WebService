import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  posts: Post[] = [];
  errorMessage: string;

  constructor(private postService: PostService) {
  }

  get(): void {
    this.postService
      .getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.get();
  }

}
