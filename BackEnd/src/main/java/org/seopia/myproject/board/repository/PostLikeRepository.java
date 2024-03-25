package org.seopia.myproject.board.repository;

import org.seopia.myproject.board.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostLikeRepository extends JpaRepository<PostLike, Integer> {
    PostLike findByLikeIpAndLikePostCode(String remoteAddr, Integer postCode);
}
