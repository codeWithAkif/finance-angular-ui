import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPost } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  // posts=[
  //     {title:'First Post', content:'This is the First Post'},
  //     {title:'Second Post', content:'This is the Second Post'},
  //     {title:'Third Post', content:'This is the Third Post'}
  // ]

  posts: IPost[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
