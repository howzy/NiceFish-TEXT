import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flyIn } from '../../animations/fly-in';

import { PostDetailService } from './services/post-detail.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  animations: [flyIn]
})
export class PostDetailComponent implements OnInit {
  post: Post = <Post>{};

  constructor(private activatedRoute: ActivatedRoute,
    private postDetailService: PostDetailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getPost(params['postId'])
    );
  }

  /** 根据id获取详情 */
  getPost(id: number) {
    this.postDetailService.getPost(id).subscribe(
      res => this.post = res,
      error => console.log(error)
    );
  }

}
