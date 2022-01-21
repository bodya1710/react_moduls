import {axioService} from './axio.service';
import baseURL, {urls} from '../configs/urls'

export const userService = {
    getAll:()=>axioService.get(urls.users).then(value => value.data),
    getById:(id)=>axioService.get(`${urls.users}/${id}`).then(value => value.data),
    getByPosts:(id)=>axioService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getByAlbums:(id)=>axioService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getByPhotos:(id)=>axioService.get(`${baseURL}/photos?albumId=${id}`).then(value => value.data)

}