package com.example.CrissX.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.CrissX.model.Friend;
import com.example.CrissX.service.FriendService;

@RestController
@RequestMapping("/api")
public class FriendController {

    @Autowired
    private FriendService friendService;

    @PostMapping("/users/{userId}/friends/{friendId}")
    public ResponseEntity<?> addFriend(@PathVariable Long userId, @PathVariable Long friendId) {
        Friend friend = friendService.addFriend(userId, friendId);
        return ResponseEntity.ok(friend);
    }

    @GetMapping("/users/{userId}/friends")
    public ResponseEntity<List<Friend>> getFriends(@PathVariable Long userId) {
        List<Friend> friends = friendService.getFriends(userId);
        return ResponseEntity.ok(friends);
    }
}