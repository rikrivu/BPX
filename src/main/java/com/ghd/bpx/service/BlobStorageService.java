package com.ghd.bpx.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

public interface BlobStorageService {
	public void downloadPermitFile(String facilityId,String permitId, HttpServletResponse response) throws IOException;
	public void downloadApplicationFile(String fileName, HttpServletResponse response) throws IOException;
	public List<String> listFacilityFiles(String facilityId);

}
