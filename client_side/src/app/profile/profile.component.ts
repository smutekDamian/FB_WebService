import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {ProfileDetailsService} from "../profileDetails.service";
import {ProfileDetails} from "../profile-details";

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  posts: Post[] = [];
  profileDetails: ProfileDetails = new ProfileDetails();
  errorMessage: string;

  constructor(private postService: ProfileDetailsService) {
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
        profileDetails => this.profileDetails = profileDetails,
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.getPosts();
    this.getProfileDetails();
  }

}
