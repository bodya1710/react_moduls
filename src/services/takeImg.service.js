import {axioService} from './axio.service';


export const takeImgService = {getAll:(url)=>axioService.get(url).then(value => value.data)}