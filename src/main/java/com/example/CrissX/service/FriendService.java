package com.example.CrissX.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.CrissX.model.Friend;
import com.example.CrissX.model.User;
import com.example.CrissX.repository.FriendRepository;
import com.example.CrissX.repository.UserRepository;

@Service
public class FriendService {

    @Autowired
    private FriendRepository friendRepository;

    @Autowired
    private UserRepository userRepository;

    public Friend addFriend(Long userId, Long friendId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        User friend = userRepository.findById(friendId).orElseThrow(() -> new RuntimeException("Friend not found"));
        
        Friend friendEntity = new Friend();
        friendEntity.setUser(user);
        friendEntity.setFriend(friend);
        
        return friendRepository.save(friendEntity);
    }

    public List<Friend> getFriends(Long userId) {
        return friendRepository.findAll();
    }

    // Additional friend management methods (remove friend, etc.)
}
