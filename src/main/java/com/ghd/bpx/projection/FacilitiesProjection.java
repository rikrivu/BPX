package com.ghd.bpx.projection;

import java.sql.Date;

import lombok.Data;

@Data
public class FacilitiesProjection {
	String impactFacilityId;
	String bpapcApiNo;	
	String formerCompanyFacilityName;
	String airQualityPermits;
	Date dateOfOwnershipChange;	
	String qtr1;
	String qtr2;
	String township;
	String range;
	Float latitude;
	Float longitude;
	String facilityType;
	String county;
	String application;
	public FacilitiesProjection(String impactFacilityId, String bpapcApiNo, String formerCompanyFacilityName, String airQualityPermits,
			Date dateOfOwnershipChange, String qtr1, String qtr2, String township, String range, Float latitude,
			Float longitude, String facilityType, String county, String application) {
		super();
		this.impactFacilityId = impactFacilityId;
		this.bpapcApiNo = bpapcApiNo;
		this.formerCompanyFacilityName = formerCompanyFacilityName;
		this.airQualityPermits = airQualityPermits;
		this.dateOfOwnershipChange = dateOfOwnershipChange;
		this.qtr1 = qtr1;
		this.qtr2 = qtr2;
		this.township = township;
		this.range = range;
		this.latitude = latitude;
		this.longitude = longitude;
		this.facilityType = facilityType;
		this.county = county;
		this.application = application;
	}
	
}
