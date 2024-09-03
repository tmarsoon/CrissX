import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const getFriends = (userId) => {
    return axios.get(`${API_URL}users/${userId}/friends`);
};

const addFriend = (userId, friendId) => {
    return axios.post(`${API_URL}users/${userId}/friends/${friendId}`);
};

const FriendService = {
    getFriends,
    addFriend
};

export default FriendService;