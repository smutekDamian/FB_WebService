import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post";
import {WallPostService} from "../wallPost.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: string;

  constructor(private wallPostService: WallPostService) { }

  getWallPosts(): void {
    this.wallPostService
      .getWallPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any> error
      );
  }

  ngOnInit(): void {
    this.getWallPosts();
  }

}
