package org.seopia.myproject.board.dto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PostDTO {
    private Integer postCode;
    private String title;
    private String writer;
    private String detail;
    private Integer recommend;
    private String notice;
    private String writeDateTime;
    private String postPassword;
    private List<CommentDTO> comment;
}