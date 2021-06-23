import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b318124f-4c2a-4805-b6b2-5e55252b0797"
    },
});


export const usersAPI = {
    getUsers(currentPage = 1,  pageSize = 10) { 
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                });
        },
        follow(userId) {
            return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        },
        unfollow(userId) {
           return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        }
    }

