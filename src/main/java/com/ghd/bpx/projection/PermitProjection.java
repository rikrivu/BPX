package com.ghd.bpx.projection;

import lombok.Data;

@Data
public class PermitProjection {
	String facilityId;
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
	
	public PermitProjection(String facilityId, String permitNumber, String legacyPermitNumber, String applicationNumber,
			String action, String reason, String startDate, String endDate, String publicNoticeDocument,
			String permitAnalysisDocument, String publicComments, String finalPermitWaiverDocument,
			String finalIssuanceDate, String expirationDate, String rescissionDate, String description) {
		this.facilityId = facilityId;
		this.permitNumber = permitNumber;
		this.legacyPermitNumber = legacyPermitNumber;
		this.applicationNumber = applicationNumber;
		this.action = action;
		this.reason = reason;
		this.startDate = startDate;
		this.endDate = endDate;
		this.publicNoticeDocument = publicNoticeDocument;
		this.permitAnalysisDocument = permitAnalysisDocument;
		this.publicComments = publicComments;
		this.finalPermitWaiverDocument = finalPermitWaiverDocument;
		this.finalIssuanceDate = finalIssuanceDate;
		this.expirationDate = expirationDate;
		this.rescissionDate = rescissionDate;
		this.description = description;
	}



	
	

}
