package com.ssafy.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TestController {


    @GetMapping("/")
    public String test() {
        return "user-service";
    }
}
