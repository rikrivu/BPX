package com.ghd.bpx.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table
@Data
public class Facility  {
	
	@Id
	String facilityId;
	String facilityName;
	String companyId;
	String companyName;
	String operating;
	String facilityClass;
	String facilityType;
	String county;
	Float latitude;
	Float longitude;
	String application;
	String permit;
	String multiple;
	@Column(name="title_v_permit")
	String titleVPermit;
	String url;
	@Column(name = "facility_filter")
	String facilityFilter;
	public Facility() {
		super();
	}

	
}
