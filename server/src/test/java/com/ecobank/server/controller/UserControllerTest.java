package com.ecobank.server.controller;

import com.ecobank.server.config.AuthenticationBean;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
//@WebMvcTest(UserController.class)
public class UserControllerTest {


    UserController userController = new UserController();

    @Test
    public void testGreetings() {
        String result = userController.greet();
        assertEquals(result, "Hello World");
    }

    @Test
    public void basicAuth() {
        AuthenticationBean result = userController.basicAuth();
        assertEquals("success", result.getMessage());
    }


}
