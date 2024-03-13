package org.seopia.myproject.board.service;


import org.modelmapper.ModelMapper;
import org.seopia.myproject.board.dto.PostDTO;
import org.seopia.myproject.board.entity.Post;
import org.seopia.myproject.board.repository.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final ModelMapper modelMapper;

    public PostService(PostRepository postRepository, ModelMapper modelMapper) {
        this.postRepository = postRepository;
        this.modelMapper = modelMapper;
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

    public Page<Post> searchPost(int page, String option, String word) {
        Pageable pageable = PageRequest.of(page, 15);
        if (option.equals("title")){
            return postRepository.findByTitleContainingAndNotice(pageable, word,"N");
        } else if(option.equals("detail")){
            return postRepository.findByDetailContainingAndNotice(pageable,word,"N");
        } else {
            return null;
        }
    }

    public PostDTO savePost(PostDTO postDTO) {
        return modelMapper.map(postRepository.save(modelMapper.map(postDTO, Post.class)),PostDTO.class);
    }
}
