package org.seopia.myproject.board.controller;


import org.seopia.myproject.board.entity.Post;
import org.seopia.myproject.board.service.PostService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
