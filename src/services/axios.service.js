import axios from "axios";

import baseURL from '../constants/urls'
import baseJSONPURL from '../constants/jsonP'

export const axiosService = axios.create({baseURL});
export const axiosServiceJSONP = axios.create({baseJSONPURL});

