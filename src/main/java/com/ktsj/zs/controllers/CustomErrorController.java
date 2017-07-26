package com.ktsj.zs.controllers;

import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String showError(HttpServletRequest request, HttpServletResponse response, Model model) {
        model.addAttribute("ROUTE", "error");

        Map<String, Object> props = new HashMap<>();
        props.put("statusCode", request.getAttribute("javax.servlet.error.status_code"));
        props.put("errorMessage", request.getAttribute("javax.servlet.error.message"));

        model.addAttribute("PROPS", props);

        return "index";
    }

    @Override
    public String getErrorPath() {
        return "error";
    }

//    @ExceptionHandler({ProductController.ProductNotFoundException.class,
//            ProductDetailController.ProductionNotFoundException.class})
//    public String handleProductNotFound(HttpServletRequest request, Model model) {
//        model.addAttribute("ROUTE", "error");
//
//        Map<String, Object> props = new HashMap<>();
//        props.put("statusCode", request.getAttribute("javax.servlet.error.status_code"));
//
//        model.addAttribute("PROPS", props);
//
//        return "index";
//    }

//    @ExceptionHandler(Exception.class)
//    public String handleError(Exception exception, Model model) {
//        model.addAttribute("ROUTE", "error");
//        model.addAttribute("PROPS", exception.getMessage());
//
//        return "index";
//    }

}
