package com.ghd.bpx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ghd.bpx.dto.FacilityDTO;
import com.ghd.bpx.service.FacilityService;

@RestController
@RequestMapping("/api")
public class FacilityController {

	@Autowired
	FacilityService facilityService;

	@GetMapping(value = "/filters", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<String> getFiltersForFacility() {
		return facilityService.getFilterForFacilityData();
	}

	@GetMapping(value = "/facility", produces = { MediaType.APPLICATION_JSON_VALUE })
	public FacilityDTO getFacilyData(Pageable pageable, @RequestParam(defaultValue = "facilityName") String sortBy,
			@RequestParam(defaultValue = "ASC") String order, @RequestParam("filter") String filter) {

		return facilityService.getFacilityData(pageable, sortBy, order, filter.toLowerCase());
	}

	@GetMapping(value = "/search", produces = { MediaType.APPLICATION_JSON_VALUE })
	public FacilityDTO searchFacilityData(Pageable pageable, @RequestParam("facilityName") String facilityName,
			@RequestParam("filter") String filter) {
		return facilityService.searchFacilityData(pageable, facilityName, filter);
	}
}
