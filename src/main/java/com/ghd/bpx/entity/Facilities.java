package com.ghd.bpx.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table
@Data
public class Facilities {
	@Id
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
	public Facilities() {
		super();
	}

}
