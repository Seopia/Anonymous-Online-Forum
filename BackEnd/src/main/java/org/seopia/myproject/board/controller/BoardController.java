package org.seopia.myproject.board.controller;


import jakarta.servlet.http.HttpServletRequest;
import org.seopia.myproject.board.dto.CommentDTO;
import org.seopia.myproject.board.dto.PostDTO;
import org.seopia.myproject.board.dto.PostLikeDTO;
import org.seopia.myproject.board.entity.Post;
import org.seopia.myproject.board.service.CommentService;
import org.seopia.myproject.board.service.PostLikeService;
import org.seopia.myproject.board.service.PostService;
import org.seopia.myproject.common.ResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {

    private final PostService postService;
    private final CommentService commentService;
    private final PostLikeService postLikeService;

    public BoardController(PostService postService, CommentService commentService, PostLikeService postLikeService) {
        this.postService = postService;
        this.commentService = commentService;
        this.postLikeService = postLikeService;
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
    @GetMapping("/show-post-detail")
    public ResponseDTO showPostDetail(@RequestParam(value = "postCode") Integer postCode){
        PostDTO postDTO = postService.findById(postCode);
        return new ResponseDTO(200,postDTO,"성공");
    }
    @GetMapping("/show-around-post-detail")
    public List<PostDTO> showAroundPostDetail(@RequestParam(value = "postCode") Integer postCode){
        return postService.getAroundPost(postCode);
    }
    @GetMapping("post-like")
    public ResponseDTO likePost(@RequestParam(value = "id")Integer postCode, HttpServletRequest request){
        PostLikeDTO postLikeDTO = postLikeService.findByLikeIpAndPostCode(request.getRemoteAddr(),postCode);
        if(postLikeDTO == null){
            PostLikeDTO postLike = new PostLikeDTO();
            postLike.setLikePostCode(postCode);
            postLike.setLikeIp(request.getRemoteAddr());
            postLikeService.insertPostLike(postLike);
            System.out.println("좋아요");
        }else {
            postLikeService.deletePostLike(postLikeDTO.getLikeCode());
            System.out.println("좋아요 취소");
        }
        return new ResponseDTO(200,null,"성공");
    }
    @PostMapping("insert-comment")
    public ResponseDTO insertComment(@RequestBody CommentDTO commentDTO, HttpServletRequest request){
        commentDTO.setCommentLike(0);
        commentDTO.setCommentTime(LocalDateTime.now().toString());
        System.out.println("==========="+request.getRemoteAddr());

        return new ResponseDTO(200, commentService.insertComment(commentDTO),"성공");
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
    @PutMapping("update-post")
    public ResponseDTO updatePost(@RequestBody PostDTO postDTO){
        System.out.println(postDTO);
        try {
            return new ResponseDTO(200,postService.updatePost(postDTO));
        } catch (Exception e){
            return new ResponseDTO(900,null, e.getMessage());
        }
    }
    @DeleteMapping("/delete-post")
    public ResponseDTO deletePost(@RequestParam(value = "postCode") Integer postCode){
        return new ResponseDTO(200, postService.deletePost(postCode));
    }
}
