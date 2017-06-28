import { Component, OnInit } from '@angular/core';
import {ProfileDetails} from "../model/profile-details";
import {ProfileDetailsService} from "../profileDetails.service";



@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent implements OnInit {
  profileDetails: ProfileDetails = new ProfileDetails();
  errorMessage: string;

  constructor( private profileService: ProfileDetailsService) {

  }
  getData(): void {
    this.profileService
      .getProfileDetails()
      .subscribe(
        profileDetails => this.profileDetails = profileDetails,
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit(): void {
    this.getData();
  }

}
