import {urls} from '../configs/urls.js'

function getById(id) {
    return   fetch(`${urls.posts}?userId=${id}`)
        .then(response => response.json())
}
export const PostsServices = {
    getById
}