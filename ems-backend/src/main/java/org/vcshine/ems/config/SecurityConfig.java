package org.vcshine.ems.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.vcshine.ems.service.impl.CustomOAuth2UserService;


@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;

    @Value("${frontend.url}")
    private String frontendUrl;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/login", "/error").permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login")
                        .userInfoEndpoint(userInfo -> userInfo
                                .userService(customOAuth2UserService)  // wstrzyknij ten bean
                        )
                        .successHandler((req, res, auth) -> {
                            res.sendRedirect(frontendUrl + "/project");
                        })
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("/")
                );

        return http.build();
    }
}
