package org.seopia.myproject.common;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter@Getter@ToString
public class ResponseDTO {
    private int code;
    private Object object;
    private String message;

    public ResponseDTO(int code) {
        this.code = code;
    }

    public ResponseDTO(Object object) {
        this.object = object;
    }

    public ResponseDTO(int code, Object object) {
        this.code = code;
        this.object = object;
    }

    public ResponseDTO(Object object, String message) {
        this.object = object;
        this.message = message;
    }

    public ResponseDTO(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
