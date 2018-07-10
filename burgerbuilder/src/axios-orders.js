import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-2d4fc.firebaseio.com/'
});

export default instance;
