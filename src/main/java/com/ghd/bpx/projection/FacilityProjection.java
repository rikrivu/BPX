package com.ghd.bpx.projection;

import lombok.Data;

@Data
public class FacilityProjection {
	
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
	String titleVPermit;
	String url;
	String facilityFilter;
	public FacilityProjection(String facilityId, String facilityName, String companyId, String companyName, String operating,
			String facilityClass, String facilityType, String county, Float latitude, Float longitude,
			String application, String permit, String multiple, String titleVPermit, String url,
			String facilityFilter) {
		this.facilityId = facilityId;
		this.facilityName = facilityName;
		this.companyId = companyId;
		this.companyName = companyName;
		this.operating = operating;
		this.facilityClass = facilityClass;
		this.facilityType = facilityType;
		this.county = county;
		this.latitude = latitude;
		this.longitude = longitude;
		this.application = application;
		this.permit = permit;
		this.multiple = multiple;
		this.titleVPermit = titleVPermit;
		this.url = url;
		this.facilityFilter = facilityFilter;
	}
	
	
	

}
