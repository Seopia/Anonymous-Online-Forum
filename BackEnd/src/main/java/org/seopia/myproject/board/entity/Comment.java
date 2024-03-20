package org.seopia.myproject.board.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "post_comment")
@AllArgsConstructor
@NoArgsConstructor
@Setter@Getter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_code")
    private Integer commentCode;
    @Column(name = "comment_time")
    private String commentTime;
    @Column(name = "comment_detail")
    private String commentDetail;
    @Column(name = "comment_like")
    private Integer commentLike;
    @Column(name = "comment_id")
    private String commentId;
    @Column(name = "comment_pwd")
    private String commentPwd;
    //Post 1
    //Comment 다
    @Column(name = "comment_post_code")
    private Integer postCode;
}
