package com.ghd.bpx.dto;

import org.springframework.data.domain.Page;

import com.ghd.bpx.projection.FacilitiesProjection;

import lombok.Data;

@Data
public class FacilitiesDTO {
	Page<FacilitiesProjection> facilities;
	Object columns;
	
	
	
	public FacilitiesDTO(Page<FacilitiesProjection> facilities, Object columns) {
		super();
		this.facilities = facilities;
		this.columns = columns;
	}



	public FacilitiesDTO() {
		super();
	}
	
	
}
