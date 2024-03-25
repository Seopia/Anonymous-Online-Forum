package org.seopia.myproject.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter
public class PostLikeDTO {
    private Integer likeCode;
    private String likeIp;
    private Integer likePostCode;
}
