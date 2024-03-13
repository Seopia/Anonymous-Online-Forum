package org.seopia.myproject.board.repository;
import org.seopia.myproject.board.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PostRepository extends JpaRepository<Post, Integer> {
    Page<Post> findAllByNotice(Pageable pageable, String n);
    Page<Post> findByRecommendGreaterThanEqualAndNotice(Pageable pageable, int recommendCount, String n);
    Page<Post> findByNotice(Pageable pageable, String status);
    Page<Post> findByTitleContainingAndNotice(Pageable pageable, String word, String n);
    Page<Post> findByDetailContainingAndNotice(Pageable pageable, String word, String n);
}