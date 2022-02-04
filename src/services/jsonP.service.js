
import {urlsJSONP} from "../constants";
import {axiosServiceJSONP} from "./axio.servicejsonp";

export const jsonPService ={
    getAllUsers: ()=>axiosServiceJSONP.get(urlsJSONP.users).then(value => value.data),
    getAllPosts: ()=>axiosServiceJSONP.get(urlsJSONP.posts).then(value => value.data),
    getAllComments: ()=>axiosServiceJSONP.get(urlsJSONP.comments).then(value => value.data)
}