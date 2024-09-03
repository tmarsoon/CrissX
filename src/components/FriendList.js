import React, { useState, useEffect } from 'react';
import FriendService from '../services/FriendService';

const FriendList = ({ userId }) => {
    const [friends, setFriends] = useState([]);
    const [friendEmail, setFriendEmail] = useState('');

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await FriendService.getFriends(userId);
                setFriends(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFriends();
    }, [userId]);

    const handleAddFriend = async (e) => {
        e.preventDefault();
        try {
            const response = await FriendService.addFriend(userId, friendEmail);
            setFriends([...friends, response.data]);
            setFriendEmail('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Friend List</h2>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.friend.email}</li>
                ))}
            </ul>
            <form onSubmit={handleAddFriend}>
                <input
                    type="email"
                    value={friendEmail}
                    onChange={(e) => setFriendEmail(e.target.value)}
                    placeholder="Enter friend's email"
                    required
                />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    );
};

export default FriendList;