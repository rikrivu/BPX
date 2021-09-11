package com.ghd.bpx.dto;

import org.springframework.data.domain.Page;

import com.ghd.bpx.projection.FacilityProjection;

import lombok.Data;

@Data
public class FacilityDTO {
	
	Page<FacilityProjection> facilities;
	Object columns;
	
	
	
	public FacilityDTO(Page<FacilityProjection> facilities, Object columns) {
		super();
		this.facilities = facilities;
		this.columns = columns;
	}



	public FacilityDTO() {
		super();
	}
	
	
	

}
