package org.seopia.myproject.board.dto;

import lombok.*;
import org.seopia.myproject.board.entity.Post;

@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter
public class CommentDTO {
    private Integer commentCode;
    private String commentTime;
    private String commentDetail;
    private Integer commentLike;
    private String commentId;
    private String commentPwd;
}
