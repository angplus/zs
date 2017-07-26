package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.bur.Inspection;
import com.ktsj.zs.entities.bur.Material;
import com.ktsj.zs.entities.bur.Order;
import com.ktsj.zs.entities.bur.Production;
import com.ktsj.zs.entities.kt.User;
import com.ktsj.zs.repositories.bur.InspectionRepository;
import com.ktsj.zs.repositories.bur.MaterialRepository;
import com.ktsj.zs.repositories.bur.OrderRepository;
import com.ktsj.zs.repositories.bur.ProductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ProductDetailController {

    @Autowired
    private ProductionRepository productionRepository;

    @Autowired
    private MaterialRepository materialRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private InspectionRepository inspectionRepository;

//    @RequestMapping("/product/{traceCode}/detail")
    public String showProductDetailController(HttpSession session, @PathVariable("traceCode") String traceCode, Model model) throws Exception {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            //401 required
//            throw new NotLoggedInException();
            return "redirect:/product/" + traceCode + "/basic";
        }

        List<Production> productions = productionRepository.getProduction(traceCode);
        if (productions.size() == 0) {
            // throw 404
            throw new ProductionNotFoundException();
        }

        Production production = productions.get(0);
        Material material = null;
        Order order = null;
        Inspection inspection = null;

        List<Material> materials = materialRepository.getMaterial(production.getBatchCode());

        if (materials.size() > 0) {
            material = materials.get(0);
        }

        //TODO order info

        List<Inspection> inspections = inspectionRepository.getInspection(production.getBatchCode());
        if (inspections.size() > 0) {
            inspection = inspections.get(0);
        }

        Map<String, Object> props = new HashMap<>();
        props.put("material", material);
        props.put("product", production);
        props.put("order", order);
        props.put("inspection", inspection);

        model.addAttribute("ROUTE", "productDetail");
        model.addAttribute("PROPS", props);

        return "index";
    }

    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No such product!")
    public static class ProductionNotFoundException extends RuntimeException {

    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Log in first!")
    public static class NotLoggedInException extends RuntimeException {

    }

}
