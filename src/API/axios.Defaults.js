import axios from 'axios';

axios.defaults.baseURL = 'http://kinnect-api-cf0f665319fa.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;