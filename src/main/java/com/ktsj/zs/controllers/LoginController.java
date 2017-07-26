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
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

//    @RequestMapping("/user")
//    public Object getUser() {
//        HrmService service = new HrmService();
//        HrmServicePortType type = service.getHrmServiceHttpPort();
//
//        ArrayOfSubCompanyBean subCompanyBean = type.getHrmSubcompanyInfo("192.168.1.89");
//        return subCompanyBean;
//    }

    @Autowired
    private UserRepository repository;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> login(HttpSession session, @RequestBody Map<String, String> info) throws NoSuchAlgorithmException {
        Map<String, Object> response = new HashMap<>();

        String username = info.get("username");
        String password = new StringBuilder(MD5Util.getMD5(info.get("password"))).reverse().toString();

        User user = repository.findUserByUsernameAndPassword(username, password);

        if (user == null) {
            response.put("ok", false);
            response.put("errorCode", 1);
            response.put("errorMessage", "user not found");

            return new ResponseEntity<Object>(response, HttpStatus.NOT_FOUND);
        }

        response.put("ok", true);
        response.put("user", user);

        session.setAttribute("user", user);
        if (Boolean.valueOf(info.get("stayLogin"))) {
            session.setMaxInactiveInterval(0);
        } else {
            session.setMaxInactiveInterval(600);
        }

        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }

}
