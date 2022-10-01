package com.ssafy.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerUpdateRequest {

    private Long id;

    private String name;

    private String path;
}