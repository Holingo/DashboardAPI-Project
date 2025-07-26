package org.vcshine.ems.mapper;

import org.vcshine.ems.dto.UserDto;
import org.vcshine.ems.entity.User;

public class UserMapper {

    public static UserDto toDto(User user) {
        if (user == null) return null;

        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .discordId(user.getDiscordId())
                .avatarUrl(user.getAvatarUrl())
                .activated(user.getActivated())
                .banned(user.getBanned())
                .adminLevel(user.getAdminLevel())
                .moderatorLevel(user.getModeratorLevel())
                .developerLevel(user.getDeveloperLevel())
                .lastLogin(user.getLastLogin())
                .build();
    }

    public static User toEntity(UserDto dto, User user) {
        if (dto == null) return null;
        if (user == null) user = new User();

        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setDiscordId(dto.getDiscordId());
        user.setAvatarUrl(dto.getAvatarUrl());
        user.setActivated(dto.getActivated());
        user.setBanned(dto.getBanned());
        user.setAdminLevel(dto.getAdminLevel());
        user.setModeratorLevel(dto.getModeratorLevel());
        user.setDeveloperLevel(dto.getDeveloperLevel());
        return user;
    }
}
