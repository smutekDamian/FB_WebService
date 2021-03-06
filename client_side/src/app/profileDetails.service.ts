import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import {Post} from "./model/post";
import { ProfileDetails } from "./model/profile-details";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileDetailsService {
  private postsUrl = 'api/profilePosts';
  private profileDetailUrl = 'api/profileDetails';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getProfileDetails(): Observable<ProfileDetails> {
    return this.http.get(this.profileDetailUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
