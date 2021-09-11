package com.ghd.bpx.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Table
@Entity
@Data
public class Permit {
	
	@Column(name = "facility_id")
	String facilityId;
	@Id
	String permitNumber;
	String legacyPermitNumber;
	String applicationNumber;
	String action;
	String reason;
	String startDate;
	String endDate;
	String publicNoticeDocument;
	String permitAnalysisDocument;
	String publicComments;
	String finalPermitWaiverDocument;
	String finalIssuanceDate;
    String expirationDate;
    String rescissionDate;
	String description;
	
	public Permit() {
		super();
	}
	
	
	
}
