package org.vcshine.ems.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String discordId;
    private String avatarUrl;
    private Boolean activated;
    private Boolean banned;
    private Integer adminLevel;
    private Integer moderatorLevel;
    private Integer developerLevel;
    private LocalDateTime lastLogin;
}
