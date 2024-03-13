package org.seopia.myproject.board.controller;


import org.seopia.myproject.board.dto.PostDTO;
import org.seopia.myproject.board.entity.Post;
import org.seopia.myproject.board.service.PostService;
import org.seopia.myproject.common.ResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/board")
public class BoardController {

    private final PostService postService;

    public BoardController(PostService postService) {
        this.postService = postService;
    }


    @GetMapping("/get-post")
    public Page<Post> test(@RequestParam(value = "page") int page){
        return postService.findPost(page);
    }

    /**
     * 추천 수 10 이상인 포스트 조회하기
     * @param page 현재 페이지
     * @return Page 객체
     */
    @GetMapping("show-by-recommend")
    public Page<Post> showPostByRecommend(@RequestParam(value = "page") int page){
        return postService.findByRecommendGreaterThenEqual(10,page);
    }

    /**
     * 공지사항 가져오기
     * @param page 현재 페이지
     * @return 공지사항 Page 객체
     */
    @GetMapping("show-notice")
    public Page<Post> showNotice(@RequestParam(value = "page") int page){
        return postService.findByNotice("Y",page);
    }
    @GetMapping("search-post")
    public Page<Post> searchPost(@RequestParam(value = "page") int page,@RequestParam(value = "option") String option,@RequestParam(value = "word") String word){
        return postService.searchPost(page,option,word);
    }

    @PostMapping("/insert-post")
    public ResponseDTO insertPost(@RequestBody PostDTO postDTO){
        postDTO.setWriteDateTime(LocalDateTime.now().withNano(0).toString());
        try {
            return new ResponseDTO(200,postService.savePost(postDTO));
        } catch (Exception e){
            return new ResponseDTO(900,null, e.getMessage());
        }
    }
}
