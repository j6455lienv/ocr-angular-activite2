import { Post } from './../../models/Post.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  created_date = new Date();
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content, 0, this.created_date.toString());

    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
