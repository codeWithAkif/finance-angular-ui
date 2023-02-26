import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IPost } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: IPost[] = [];
  private postsUpdated = new Subject<IPost[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: IPost = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
