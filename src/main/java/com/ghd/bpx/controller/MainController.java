package com.ghd.bpx.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String getMainPage() {
		return "index.html";
	}
	
	@RequestMapping("permits/**")
	public String getHandlerForOtherPages() {
		return "index";
	}


}
