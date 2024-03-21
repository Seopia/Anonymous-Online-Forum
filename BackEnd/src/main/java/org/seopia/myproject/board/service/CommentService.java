package org.seopia.myproject.board.service;

import org.modelmapper.ModelMapper;
import org.seopia.myproject.board.dto.CommentDTO;
import org.seopia.myproject.board.entity.Comment;
import org.seopia.myproject.board.repository.CommentRepository;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final ModelMapper modelMapper;
    public CommentService(CommentRepository commentRepository, ModelMapper modelMapper) {
        this.commentRepository = commentRepository;
        this.modelMapper = modelMapper;
    }

    public CommentDTO insertComment(CommentDTO commentDTO) {
        System.out.println(commentDTO);
        return modelMapper.map(commentRepository.save(modelMapper.map(commentDTO, Comment.class)),CommentDTO.class);
    }
}
