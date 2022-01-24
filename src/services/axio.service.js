import axios from 'axios';
import baseURL from '../configs/urls';


const axioService =axios.create({baseURL});

export {axioService}