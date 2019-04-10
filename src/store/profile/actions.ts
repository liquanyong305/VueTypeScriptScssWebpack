import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }): any {
        console.log('Action Start')
        axios.get('http://localhost:3000/get_users',{
        }).then((response) => {
            console.log('response:',response);
            const payload: User = response && response.data;
            commit('profileLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('profileError');
        });
    }
};
