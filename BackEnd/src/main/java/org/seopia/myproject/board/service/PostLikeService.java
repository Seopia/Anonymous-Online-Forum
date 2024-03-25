package org.seopia.myproject.board.service;

import org.modelmapper.ModelMapper;
import org.seopia.myproject.board.dto.PostDTO;
import org.seopia.myproject.board.dto.PostLikeDTO;
import org.seopia.myproject.board.entity.PostLike;
import org.seopia.myproject.board.repository.PostLikeRepository;
import org.springframework.stereotype.Service;

@Service
public class PostLikeService {
    private final PostLikeRepository postLikeRepository;
    private final ModelMapper modelMapper;

    public PostLikeService(PostLikeRepository postLikeRepository, ModelMapper modelMapper) {
        this.postLikeRepository = postLikeRepository;
        this.modelMapper = modelMapper;
    }
    public PostLikeDTO findByLikeIpAndPostCode(String remoteAddr, Integer postCode) {
        try {
            PostLike postLike = postLikeRepository.findByLikeIpAndLikePostCode(remoteAddr,postCode);
            return modelMapper.map(postLike,PostLikeDTO.class);
        } catch (Exception e){
            return null;
        }
    }

    public void insertPostLike(PostLikeDTO postLikeDTO) {
        postLikeRepository.save(modelMapper.map(postLikeDTO, PostLike.class));
    }

    public void deletePostLike(Integer likeCode) {
        postLikeRepository.deleteById(likeCode);
    }
}
