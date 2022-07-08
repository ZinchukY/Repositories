import {constants} from '../components/constants/constants';

export const usersService = {
    getAllUsers: () => fetch(constants.apiUrl + 'users').then(value => value.json())
}