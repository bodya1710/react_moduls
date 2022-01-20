import {axioService} from './axio.service';
import {urls} from '../configs/urls'

export const userService = {
    getAll:()=>axioService.get(urls.users).then(value => value.data),
    getById:(id)=>axioService.get(`${urls.users}/${id}`).then(value => value.data),
    getByPosts:(id)=>axioService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}