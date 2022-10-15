package com.example.spring_jquery_ajax.controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @GetMapping("/get_user_page")
    public String getUsersPage(){
        return "users-page";
    }
}
