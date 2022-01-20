import {axioService} from './axio.service';
import {urls} from '../configs/urls'

export const postService = {
  getAll:()=>axioService.get(urls.posts).then(value => value.data),
  getById:(id)=>axioService.get(`${urls.posts}/${id}`).then(value => value.data)
}