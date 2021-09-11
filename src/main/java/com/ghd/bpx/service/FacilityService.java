package com.ghd.bpx.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.ghd.bpx.dto.FacilityDTO;

public interface FacilityService {
	
	public FacilityDTO getFacilityData(Pageable pageable,String sortBy,String order,String filter);

	public List<String> getFilterForFacilityData();
	
	public FacilityDTO searchFacilityData(Pageable pageable, String facilityName, String filter);

}
