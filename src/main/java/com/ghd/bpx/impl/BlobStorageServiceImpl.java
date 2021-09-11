package com.ghd.bpx.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.azure.core.http.rest.PagedIterable;
import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.models.BlobItem;
import com.ghd.bpx.service.BlobStorageService;
import com.ghd.bpx.util.StringConstant;

@Service
public class BlobStorageServiceImpl implements BlobStorageService {

	@Autowired
	private BlobContainerClient blobContainerAsyncClient;

	public void downloadPermitFile(String facilityId, String permitId, HttpServletResponse response)
			throws IOException {
		PagedIterable<BlobItem> blobPaged = blobContainerAsyncClient
				.listBlobsByHierarchy(StringConstant.PERMITS_FOLDER + facilityId + "_" + permitId);

		Iterator<BlobItem> blobIterator = blobPaged.stream().iterator();
		if (blobIterator == null || !blobIterator.hasNext()) {
			throw new FileNotFoundException();
		}
		BlobItem blob = blobIterator.next();
		String contentType = blob.getProperties().getContentType();
		response = getResponseHeaders(response, contentType, blob.getName());
		blobContainerAsyncClient.getBlobClient(blob.getName()).download(response.getOutputStream());
	}

	public void downloadApplicationFile(String fileName, HttpServletResponse response) throws IOException {
		BlobClient client = blobContainerAsyncClient.getBlobClient(StringConstant.APPLICATION_FOLDER + fileName);
		if (client == null) {
			throw new FileNotFoundException();
		}
		String contentType = client.getProperties().getContentType();
		
		response = getResponseHeaders(response, contentType, client.getBlobName());
		client.download(response.getOutputStream());
		
	}
	
	public HttpServletResponse getResponseHeaders(HttpServletResponse response,String contentType,String fileName) {
		response.addHeader(StringConstant.EXPOSE_HEADERS,StringConstant.CONTENT_DISP);
		response.setContentType(contentType);
		fileName =  fileName.split("/")[1];
		if (contentType.equalsIgnoreCase("application/pdf")) {
			response.addHeader("Content-Disposition:inline;filename=" , fileName);
		}
		else {
			response.addHeader("Content-Disposition:attachment; filename=", fileName);
		}
		
		return response;
	}

	public List<String> listFacilityFiles(String facilityId) {
		return blobContainerAsyncClient.listBlobsByHierarchy(StringConstant.APPLICATION_FOLDER + facilityId + "_").stream()
				.map(e -> e.getName().split("/")[1]).collect(Collectors.toList());

	}
}
