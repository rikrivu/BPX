package com.ghd.bpx.service;

import com.ghd.bpx.dto.PermitDTO;

public interface PermitService {
	
	public PermitDTO getPermitDataForFacility(String sortBy,String order,String facility);

}
