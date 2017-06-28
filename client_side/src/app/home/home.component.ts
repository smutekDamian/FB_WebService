import { Component, OnInit } from '@angular/core';
import {ProfileDetailsService} from "../profileDetails.service";
import {ProfileDetails} from "../model/profile-details";
import {WallPostService} from "../wallPost.service";
import {Post} from "../model/post";
import {post} from "selenium-webdriver/http";
import {Router} from '@angular/router';
import {delay} from "q";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  profileDetails: ProfileDetails = new ProfileDetails();
  errorMessage: string;
  post: string;
  p: Post = new Post();


  constructor(private profileDetailsService: ProfileDetailsService, private wallPostService: WallPostService,
  private router: Router) { }

  getProfileDetails(): void {
    this.profileDetailsService
      .getProfileDetails()
      .subscribe(
        profileDetails => this.profileDetails = profileDetails,
        error => this.errorMessage = <any>error
      );
  }

  onSubmit(){
    this.p.message = this.post;
    this.p.from = "DAmian";
    this.p.name = "Smutek";
    this.p.picture = "Łobrazek";
    this.wallPostService.create(this.p)
      .subscribe(error => this.errorMessage = <any>error);
    delay(1000);
    this.router.navigateByUrl('/profile');

  }


  ngOnInit(): void {
    this.getProfileDetails();
  }

}
