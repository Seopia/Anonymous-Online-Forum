package org.seopia.myproject.board.service;


import jakarta.transaction.Transactional;
import org.seopia.myproject.board.entity.Post;
import org.seopia.myproject.board.repository.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Page<Post> findPost(int page) {
        Pageable pageable = PageRequest.of(page,15);
        Page<Post> post =  postRepository.findAllByNotice(pageable, "N");
        for(Post content : post.getContent()){
            String[] parts = content.getWriteDateTime().split("[- :]");
            String convertTime = parts[0] + "/ " + parts[1] + "/   " + parts[2] + "/ " + parts[3] + ":" + parts[4];
            content.setWriteDateTime(convertTime);
        }
        return post;
    }

    public Page<Post> findByRecommendGreaterThenEqual(int recommendCount,int page) {
        Pageable pageable = PageRequest.of(page,15);
        return postRepository.findByRecommendGreaterThanEqualAndNotice(pageable, recommendCount,"N");
    }

    public Page<Post> findByNotice(String status, int page) {
        Pageable pageable = PageRequest.of(page, 15);
        return postRepository.findByNotice(pageable,status);
    }
}
