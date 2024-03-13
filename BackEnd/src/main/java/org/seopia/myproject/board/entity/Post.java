package org.seopia.myproject.board.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "post")
@AllArgsConstructor
@NoArgsConstructor
@Setter@Getter@ToString
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
}
