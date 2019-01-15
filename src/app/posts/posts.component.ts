import { Router } from '@angular/router';
import { Post } from './../models/Post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscribtion: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postSubscribtion = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/post', 'new']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onLike(id: number) {
    this.posts[id].likes += 1;
    this.postsService.savePosts();
  }

  onDislike(id: number) {
    this.posts[id].likes -= 1;
    this.postsService.savePosts();
  }

  ngOnDestroy() {
    this.postSubscribtion.unsubscribe();
  }

}
