package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.kt.User;
import com.ktsj.zs.repositories.kt.UserRepository;
import com.ktsj.zs.utils.MD5Util;
import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
public class AddUserController {

    @Autowired
    private UserRepository repository;

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public ResponseEntity<?> addUser(HttpSession session, @RequestBody Map<String, String> info) throws NoSuchAlgorithmException {
        Map<String, Object> response = new HashMap<>();

        User user = (User) session.getAttribute("user");

        if (user == null) {
            response.put("ok", false);
            response.put("errorCode", 1);
            response.put("errorMessage", "Please log in first.");

            return new ResponseEntity<Object>(response, HttpStatus.UNAUTHORIZED);
        }

        if (user.getRole() != 0) {
            response.put("ok", false);
            response.put("errorCode", 2);
            response.put("errorMessage", "Only manager can add a user.");

            return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
        }

        String username = info.get("username");

        if (username == null || username.equals("")) {
            response.put("ok", false);
            response.put("errorCode", 3);
            response.put("errorMessage", "username cannot be empty!");

            return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
        }

        User newUser = new User();

        newUser.setUsername(username);

        String pass = new StringBuilder(MD5Util.getMD5("111111")).reverse().toString();
        newUser.setPassword(pass);

        newUser.setCreatedBy(user.getId());

        try {
            newUser = repository.save(newUser);
        } catch (Exception e) {
            newUser = null;

            if (e instanceof DataIntegrityViolationException) {
                if (e.getCause() instanceof ConstraintViolationException) {
                    if (e.getCause().getCause() instanceof MySQLIntegrityConstraintViolationException) {
                        if (((MySQLIntegrityConstraintViolationException)(e.getCause().getCause())).getErrorCode() == 1062) {
                            response.put("ok", false);
                            response.put("errorCode", 4);
                            response.put("errorMessage", "User exists!");

                            return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
                        }
                    }
                }
            }

            response.put("ok", false);
            response.put("errorCode", 5);
            response.put("errorMessage", "Add user error!");

            return new ResponseEntity<Object>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("ok", true);

        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }
}
