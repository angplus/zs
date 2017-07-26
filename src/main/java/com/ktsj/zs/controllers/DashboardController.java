package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.kt.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class DashboardController {

    @RequestMapping("/dashboard")
    public String showDashboard(HttpSession session, Model model) {
        Map<String, Object> props = new HashMap<>();

        User user = (User) session.getAttribute("user");
        if (user == null) {
            props.put("logged", false);
        } else {
            props.put("logged", true);
            props.put("username", user.getUsername());
            props.put("isManager", user.getRole() == 0);
        }

        model.addAttribute("ROUTE", "dashboard");
        model.addAttribute("PROPS", props);

        return "index";
    }

}
