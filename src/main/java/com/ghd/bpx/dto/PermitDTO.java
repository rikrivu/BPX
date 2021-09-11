package com.ghd.bpx.dto;

import java.util.List;

import com.ghd.bpx.projection.PermitProjection;

import lombok.Data;

@Data
public class PermitDTO {
	
	List<PermitProjection> permits;
	Object columns;
	
	
	public PermitDTO(List<PermitProjection> permits, Object columns) {
		this.permits = permits;
		this.columns = columns;
	}


	public PermitDTO() {
	}
	
	
	

}
