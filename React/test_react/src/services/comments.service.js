import {constants} from '../components/constants/constants';

export const commentsService = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
}