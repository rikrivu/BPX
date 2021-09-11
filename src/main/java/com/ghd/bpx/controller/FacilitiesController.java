package com.ghd.bpx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ghd.bpx.dto.FacilitiesDTO;
import com.ghd.bpx.service.FacilitiesService;

@RestController
@RequestMapping("/api")
public class FacilitiesController {
	@Autowired
	FacilitiesService facilitiesService;

	@GetMapping(value = "/facilities", produces = { MediaType.APPLICATION_JSON_VALUE })
	public FacilitiesDTO getFacilyData(Pageable pageable, @RequestParam(defaultValue = "formerCompanyFacilityName") String sortBy,
			@RequestParam(defaultValue = "ASC") String order, @RequestParam("filter") String filter) {

		return facilitiesService.getFacilityData(pageable, sortBy, order, filter.toLowerCase());
	}

}
