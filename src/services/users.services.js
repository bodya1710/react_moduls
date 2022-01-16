import {urls} from '../configs/urls.js'
function getAll() {
  return   fetch(urls.users)
         .then(response => response.json())
}

export const UserServices = {
    getAll

}