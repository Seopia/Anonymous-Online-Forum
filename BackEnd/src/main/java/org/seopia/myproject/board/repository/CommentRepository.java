package org.seopia.myproject.board.repository;

import org.seopia.myproject.board.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
