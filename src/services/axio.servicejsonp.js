import axios from "axios";
import baseJSONPURL from '../constants/jsonP'

export const axiosServiceJSONP = axios.create({baseJSONPURL});