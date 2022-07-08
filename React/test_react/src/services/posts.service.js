import {constants} from "../components/constants/constants";

export const postsService = {
    getAllPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())
}