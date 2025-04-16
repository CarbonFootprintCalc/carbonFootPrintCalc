package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

// Controller for handling all final report calculations

@RestController
public class FinalReportController {
    
    @ResponseBody
    @GetMapping("/final-report")
    public double calcTotal() {
        
        return 0;
    }
}
