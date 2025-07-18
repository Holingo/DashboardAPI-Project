package org.vcshine.ems.mapper;

import org.vcshine.ems.dto.UserDto;
import org.vcshine.ems.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
          user.getId(),
          user.getUsername(),
          user.getPassword(),
          user.getEmail()
        );
    }

    public static User mapToUser(UserDto userDto) {
        return new User(
            userDto.getId(),
            userDto.getUsername(),
            userDto.getPassword(),
            userDto.getEmail()
        );
    }
}
