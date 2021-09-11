package com.ghd.bpx.controller;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ghd.bpx.service.BlobStorageService;
import com.ghd.bpx.util.StringConstant;

@RestController
@RequestMapping("/api")
public class BlobStorageController{

	@Autowired
	private BlobStorageService blobStorageService;
	
	private static final Logger LOGGER =  
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME); 
	

	@CrossOrigin(allowedHeaders = {"Content-Type","Content-Disposition"})
	@GetMapping(value = "download/permit", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public void getPermitFile(@RequestParam("facilityId") String facilityId,
			@RequestParam("permitId") String permitId, HttpServletResponse response) throws IOException {
		try {
			blobStorageService.downloadPermitFile(facilityId, permitId,response);
		}catch(IOException e) {
			LOGGER.log(Level.WARNING, e , ()->StringConstant.PERMIT_FILE_NOT_FOUND);
			response.sendError(500, StringConstant.PERMIT_FILE_NOT_FOUND);
		}
	}
	
	@CrossOrigin(allowedHeaders = {"Content-Type","Content-Disposition"})
	@GetMapping(value = "download/application", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public void getApplicationFile(@RequestParam("fileName") String fileName, HttpServletResponse response) throws IOException{
		try {
			blobStorageService.downloadApplicationFile(fileName,response);
		}catch(IOException e) {
			LOGGER.log(Level.WARNING, e , ()->StringConstant.FILE_NOT_FOUND);
			response.sendError(500, StringConstant.FILE_NOT_FOUND);
		}
	}

	@GetMapping(value = "/list/file", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<String> listFacilityFiles(@RequestParam("facilityId") String facilityId) {
		return blobStorageService.listFacilityFiles(facilityId);
	}
}
