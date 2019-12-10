import { Injectable } from '@angular/core';
import {PostDto} from '../../dto/PostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: PostDto[] = [
    {
      id: 1,
      title: 'My First Post in this blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat iaculis tellus, vitae vehicula arcu aliquet non. Sed a efficitur augue, quis elementum erat. Suspendisse sodales, sapien id placerat imperdiet, augue lectus efficitur nulla, vitae hendrerit eros metus a ligula. Nullam nisl lorem, tincidunt a enim non, dapibus semper nunc. Donec consequat nibh est, sodales fermentum ex consequat a. Suspendisse potenti. Aenean vel pulvinar nunc, eget dapibus augue. Ut vitae pretium arcu. Aenean sed justo justo. Mauris mollis vel justo non scelerisque. Etiam vel ex non nisi cursus auctor id at magna.',
      date: '2019-12-10'
    },
    {
      id: 2,
      title: 'My Second Post in this blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat iaculis tellus, vitae vehicula arcu aliquet non. Sed a efficitur augue, quis elementum erat. Suspendisse sodales, sapien id placerat imperdiet, augue lectus efficitur nulla, vitae hendrerit eros metus a ligula. Nullam nisl lorem, tincidunt a enim non, dapibus semper nunc. Donec consequat nibh est, sodales fermentum ex consequat a. Suspendisse potenti. Aenean vel pulvinar nunc, eget dapibus augue. Ut vitae pretium arcu. Aenean sed justo justo. Mauris mollis vel justo non scelerisque. Etiam vel ex non nisi cursus auctor id at magna.',
      date: '2019-12-10'
    },
    {
      id: 3,
      title: 'My Third Post in this blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat iaculis tellus, vitae vehicula arcu aliquet non. Sed a efficitur augue, quis elementum erat. Suspendisse sodales, sapien id placerat imperdiet, augue lectus efficitur nulla, vitae hendrerit eros metus a ligula. Nullam nisl lorem, tincidunt a enim non, dapibus semper nunc. Donec consequat nibh est, sodales fermentum ex consequat a. Suspendisse potenti. Aenean vel pulvinar nunc, eget dapibus augue. Ut vitae pretium arcu. Aenean sed justo justo. Mauris mollis vel justo non scelerisque. Etiam vel ex non nisi cursus auctor id at magna.',
      date: '2019-12-10'
    }
  ];

  constructor() { }

  getPost(id: number): PostDto {
    for (const post of this.posts) {
      if (post.id === id) {
        return post;
      }
    }
    return null;
  }

  getAllPosts(): PostDto[] {
    return this.posts;
  }
}
