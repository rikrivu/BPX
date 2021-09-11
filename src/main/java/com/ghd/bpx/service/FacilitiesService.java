package com.ghd.bpx.service;

import org.springframework.data.domain.Pageable;

import com.ghd.bpx.dto.FacilitiesDTO;

public interface FacilitiesService {
	public FacilitiesDTO getFacilityData(Pageable pageable, String sortBy, String order, String filter);	
}
