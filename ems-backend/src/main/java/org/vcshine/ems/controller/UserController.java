package org.vcshine.ems.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vcshine.ems.dto.UserDto;
import org.vcshine.ems.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        UserDto userDto = userService.getUserById(id);
        return ResponseEntity.ok(userDto);
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto created = userService.createUser(userDto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
        UserDto updated = userService.updateUser(id, userDto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<UserDto> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
