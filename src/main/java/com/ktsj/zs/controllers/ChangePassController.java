package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.kt.User;
import com.ktsj.zs.repositories.kt.UserRepository;
import com.ktsj.zs.utils.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ChangePassController {

    @Autowired
    private UserRepository repository;

    @RequestMapping(value = "/changePass", method = RequestMethod.POST)
    public ResponseEntity<?> changePass(HttpSession session, @RequestBody Map<String, String> info) throws NoSuchAlgorithmException {
        Map<String, Object> response = new HashMap<>();

        User user = (User) session.getAttribute("user");

        if (user == null) {
            response.put("ok", false);
            response.put("errorCode", 1);
            response.put("errorMessage", "Please log in first.");

            return new ResponseEntity<Object>(response, HttpStatus.UNAUTHORIZED);
        }

        String newPassParam = info.get("newPass");
        if (newPassParam == null || newPassParam.equals("")) {
            response.put("ok", false);
            response.put("errorCode", 2);
            response.put("errorMessage", "New pass cannot be empty.");

            return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
        }

        String oldPass = new StringBuilder(MD5Util.getMD5(info.get("oldPass"))).reverse().toString();

        if (!user.getPassword().equals(oldPass)) {
            response.put("ok", false);
            response.put("errorCode", 3);
            response.put("errorMessage", "Password is not right!");

            return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
        }

        String newPass = new StringBuilder(MD5Util.getMD5(newPassParam)).reverse().toString();
        user.setPassword(newPass);

        try {
            repository.save(user);
        } catch (Exception e) {
            response.put("ok", false);
            response.put("errorCode", 4);
            response.put("errorMessage", "Cannot change password!");

            return new ResponseEntity<Object>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("ok", true);

        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }

}
