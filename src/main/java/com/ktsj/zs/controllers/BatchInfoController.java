package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.bur.*;
import com.ktsj.zs.repositories.bur.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class BatchInfoController {

    @Autowired
    private CsbjcPadRepository csbjcPadRepository;

    @Autowired
    private DjxPdaRepository djxPdaRepository;

    @Autowired
    private HongLiaoTongPdaRepository hongLiaoTongPdaRepository;

    @Autowired
    private JiChuJiPdaRepository jiChuJiPdaRepository;

    @Autowired
    private PllqPdaRepository pllqPdaRepository;

//    @RequestMapping("/batch/{code}")
    public String getBatchInfo(@PathVariable String code, @RequestParam(required = false) String traceCode, Model model) {

        Map<String, Object> props = new HashMap<>();

        try {
            CsbjcPda csbjcPda = csbjcPadRepository.findOne(code);
            DjxPda djxPda = djxPdaRepository.findOne(code);
            HongLiaoTongPda hongLiaoTongPda = hongLiaoTongPdaRepository.findOne(code);
            JiChuJiPda jiChuJiPda = jiChuJiPdaRepository.findOne(code);
            PllqPda pllqPda = pllqPdaRepository.findOne(code);

            if (traceCode != null && !traceCode.isEmpty()) {
                props.put("traceCode", traceCode);
            }
            props.put("csbjc", csbjcPda);
            props.put("djx", djxPda);
            props.put("hongLiaoTong", hongLiaoTongPda);
            props.put("jiChuJi", jiChuJiPda);
            props.put("pllq", pllqPda);

            props.put("ok", true);
        } catch (Exception e) {
            props.put("ok", false);
        }

        model.addAttribute("ROUTE", "batch");
        model.addAttribute("PROPS", props);

        return "index";
    }

}
