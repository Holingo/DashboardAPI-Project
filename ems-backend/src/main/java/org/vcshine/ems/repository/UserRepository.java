package org.vcshine.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.vcshine.ems.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
