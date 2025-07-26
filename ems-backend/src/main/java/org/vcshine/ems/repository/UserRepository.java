package org.vcshine.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vcshine.ems.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByDiscordId(String discordId);
    Optional<User> findByUsername(String username);
}
