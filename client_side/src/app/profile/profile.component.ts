import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post";
import {ProfileDetailsService} from "../profileDetails.service";
import {ProfileDetails} from "../model/profile-details";
import {delay} from "q";
import {WallPostService} from "../wallPost.service";

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  posts: Post[] = [];
  profileDetails: ProfileDetails = new ProfileDetails();
  errorMessage: string;

  constructor(private postService: ProfileDetailsService,
    private wallPostService: WallPostService) {
  }

  getPosts(): void {
    this.postService
      .getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }
  getProfileDetails(): void {
    this.postService
      .getProfileDetails()
      .subscribe(
        profileDetails => {this.profileDetails = profileDetails},
        error => this.errorMessage = <any>error
      );
  }
  deletePost(id: string): void {
    this.wallPostService.deletePost(id)
      .subscribe(error => this.errorMessage = <any>error);
    delay(400);
    location.reload();
  }

  ngOnInit(): void {
    this.getPosts();
    this.getProfileDetails();
  }

}
