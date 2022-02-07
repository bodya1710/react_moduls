import {axioService} from "./axio.service";
import urls from "../constans/urls";

export const moviesService ={
    getAll: ()=>axioService.get(urls).then(value => value.data)
}