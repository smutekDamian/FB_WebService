import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "./model/post";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WallPostService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private wallPostsUrl = 'api/wall';
  private deletePostUrl = 'api/deletePost';

  constructor(private http: Http) { }

  create(post: Post): Observable<Post> {
    return this.http
      .post(this.wallPostsUrl, JSON.stringify(post), {headers: this.headers})
      .map(this.extractData)
      .catch(this.handleError);
  }
  deletePost(id: string): Observable<string> {
    return this.http
      .post(this.deletePostUrl, JSON.stringify(id), {headers: this.headers})
      .map(this.extractData)
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
