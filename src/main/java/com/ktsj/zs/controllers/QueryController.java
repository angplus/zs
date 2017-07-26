package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.bur.*;
import com.ktsj.zs.entities.kt.User;
import com.ktsj.zs.repositories.bur.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class QueryController {

    // TraceCode Related
    @Autowired
    private ProductionRepository productionRepository;

    @Autowired
    private MaterialRepository materialRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private InspectionRepository inspectionRepository;

    // BatchInfo Related
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

    @RequestMapping("/query")
    public String query(HttpSession session, HttpServletRequest request, HttpServletResponse response,
                        @RequestParam(required = false) String tc, @RequestParam(required = false) String bc,
                        @RequestParam(required = false) Integer sd,
                        Model model) {
        Map<String, Object> props = new HashMap<>();

        if (bc != null) {
            List<CsbjcPda> csbjcPdas = csbjcPadRepository.findTop100ByBatchCodeOrderByTsDesc(bc);
            List<DjxPda> djxPdas = djxPdaRepository.findTop100ByBatchCodeOrderByTsDesc(bc);
            List<HongLiaoTongPda> hongLiaoTongPdas = hongLiaoTongPdaRepository.findTop100ByBatchCodeOrderByTsDesc(bc);
            List<JiChuJiPda> jiChuJiPdas = jiChuJiPdaRepository.findTop100ByBatchCodeOrderByTsDesc(bc);
            List<PllqPda> pllqPdas = pllqPdaRepository.findTop100ByBatchCodeOrderByTsDesc(bc);

            if (tc != null && !tc.isEmpty()) {
                props.put("traceCode", tc);
            }
            props.put("csbjc", csbjcPdas);
            props.put("djx", djxPdas);
            props.put("hongLiaoTong", hongLiaoTongPdas);
            props.put("jiChuJi", jiChuJiPdas);
            props.put("pllq", pllqPdas);

            props.put("ok", true);

            model.addAttribute("ROUTE", "batch");
            model.addAttribute("PROPS", props);

            return "index";
        }

        if (tc != null) {
            List<Production> productions = productionRepository.getProduction(tc);
            if (productions.size() == 0) {
                props.put("traceCode", tc);
                props.put("ok", false);

                model.addAttribute("ROUTE", "query");
                model.addAttribute("PROPS", props);

                return "index";
            } else {
                response.addHeader("Pragma", "no-cache");
                response.addHeader("Cache-Control", "no-store, must-revalidate, max-age=0");

                User user = (User) session.getAttribute("user");
                if (user == null) {
                    props.put("logged", false);
                } else {
                    if (sd != null && sd > 0) {
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

                        props.put("material", material);
                        props.put("product", production);
                        props.put("order", order);
                        props.put("inspection", inspection);

                        model.addAttribute("ROUTE", "productDetail");
                        model.addAttribute("PROPS", props);

                        return "index";
                    }
                    props.put("logged", true);
                }

                props.put("product", productions.get(0));

                model.addAttribute("ROUTE", "product");
                model.addAttribute("PROPS", props);

                return "index";
            }
        }

        model.addAttribute("ROUTE", "query");
        model.addAttribute("PROPS", props);

        return "index";
    }

}
