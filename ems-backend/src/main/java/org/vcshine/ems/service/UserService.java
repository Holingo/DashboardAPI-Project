package org.vcshine.ems.service;

import org.vcshine.ems.dto.UserDto;
import org.vcshine.ems.entity.User;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto user);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updatedUser);

    void deleteUser(Long userId);
}
