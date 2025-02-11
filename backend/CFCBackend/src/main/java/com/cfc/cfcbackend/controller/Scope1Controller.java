package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.StationaryCombustionService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Scope1Controller {
    @Resource
    StationaryCombustionService stationaryCombustionService;

    @ResponseBody
    @GetMapping("scope1")
    public double scope1() {
        return stationaryCombustionService.naturalGasCO2(5000);
    }
}
