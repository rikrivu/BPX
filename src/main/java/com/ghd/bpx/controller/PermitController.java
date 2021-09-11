package com.ghd.bpx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ghd.bpx.dto.PermitDTO;
import com.ghd.bpx.service.PermitService;

@RestController
@RequestMapping("/api")
public class PermitController {

	@Autowired
	PermitService permitService;

	@GetMapping(value = "/permit", produces = { MediaType.APPLICATION_JSON_VALUE })
	public PermitDTO getFacilyData(@RequestParam(defaultValue = "permitNumber") String sortBy,
			@RequestParam(defaultValue = "ASC") String order, @RequestParam("facilityId") String facilityId) {
		return permitService.getPermitDataForFacility(sortBy,order,facilityId);
	}
}
