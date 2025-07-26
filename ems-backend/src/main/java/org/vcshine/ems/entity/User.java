package org.vcshine.ems.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "accounts")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 64)
    private String username;

    @Column(unique = true, length = 254)
    private String email;

    @Column(length = 45)
    private String ip;

    @Column(name = "register_date")
    private LocalDateTime registerDate;

    @Column(name = "discord_id", unique = true)
    private String discordId;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Column(nullable = false)
    private Boolean activated;

    @Column(name = "admin_level", nullable = false, columnDefinition = "integer default 0")
    private Integer adminLevel = 0;

    @Column(name = "moderator_level", nullable = false, columnDefinition = "integer default 0")
    private Integer moderatorLevel = 0;

    @Column(name = "developer_level", nullable = false, columnDefinition = "integer default 0")
    private Integer developerLevel = 0;

    @Column(nullable = false)
    private Boolean banned = false;

    @Column(name = "last_login")
    private LocalDateTime lastLogin;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        registerDate = LocalDateTime.now();
        activated = false;
        banned = false;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
