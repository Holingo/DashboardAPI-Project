package org.vcshine.ems.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.vcshine.ems.entity.User;
import org.vcshine.ems.repository.UserRepository;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate =
                new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String discordId = oAuth2User.getAttribute("id");
        String username = oAuth2User.getAttribute("username");
        String email = oAuth2User.getAttribute("email");
        String avatarHash = oAuth2User.getAttribute("avatar");

        String avatarUrl;
        if (avatarHash != null && discordId != null) {
            avatarUrl = String.format("https://cdn.discordapp.com/avatars/%s/%s.png", discordId, avatarHash);
        } else {
            avatarUrl = null;
        }

        User user = userRepository.findByDiscordId(discordId)
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setDiscordId(discordId);
                    newUser.setUsername(username);
                    newUser.setEmail(email);
                    newUser.setAvatarUrl(avatarUrl);
                    newUser.setActivated(false);
                    return newUser;
                });

        // Update data account
        user.setUsername(username);
        user.setEmail(email);
        user.setAvatarUrl(avatarUrl);
        user.setLastLogin(LocalDateTime.now());
        userRepository.save(user);

        return oAuth2User;
    }
}
