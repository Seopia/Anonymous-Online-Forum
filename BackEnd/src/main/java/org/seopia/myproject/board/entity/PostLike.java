package org.seopia.myproject.board.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "post_like")
public class PostLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_code")
    private Integer likeCode;
    @Column(name = "like_ip")
    private String likeIp;
    @Column(name = "post_code")
    private Integer likePostCode;
}

