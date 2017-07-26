package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.bur.ProductBasic;
import com.ktsj.zs.entities.kt.User;
import com.ktsj.zs.repositories.bur.ProductBasicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ProductController {

    @Autowired
    private ProductBasicRepository repository;

//    @RequestMapping("/product/{traceCode}/basic")
    public String getProduct(HttpSession session, @PathVariable("traceCode") String traceCode, Model model, HttpServletResponse response) throws Exception {

        response.addHeader("Pragma", "no-cache");
        response.addHeader("Cache-Control", "no-store, must-revalidate, max-age=0");

        List<ProductBasic> productBasics = repository.getProductBasic(traceCode);
        if (productBasics.size() == 0) {
            throw new ProductNotFoundException();
        }
        Map<String, Object> props = new HashMap<>();
        props.put("product", productBasics.get(0));

        User user = (User) session.getAttribute("user");
        if (user == null) {
            props.put("logged", false);
        } else {
            props.put("logged", true);
        }

        model.addAttribute("ROUTE", "product");
        model.addAttribute("PROPS", props);

        return "index";
    }

    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No such product!")
    public static class ProductNotFoundException extends RuntimeException {

    }

}
