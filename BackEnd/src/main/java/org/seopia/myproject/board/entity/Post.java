package org.seopia.myproject.board.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "post")
@AllArgsConstructor
@NoArgsConstructor
@Setter@Getter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_code")
    private Integer postCode;
    @Column(name="title")
    private String title;
    @Column(name="writer")
    private String writer;
    @Column(name="detail")
    private String detail;
    @Column(name="recommend")
    private Integer recommend;
    @Column(name="notice")
    private String notice;
    @Column(name="write_date_time")
    private String writeDateTime;
    @Column(name="post_password")
    private String postPassword;

    @OneToMany(mappedBy = "postCode")
    private List<Comment> comment = new ArrayList<>();
}
