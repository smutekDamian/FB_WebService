import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Post} from "./post";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  private postsUrl = 'api/feeds';

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response => response.json().data as Post[])
      .catch(PostService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
