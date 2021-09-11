package com.ghd.bpx.config;


import com.azure.storage.blob.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BlobStorageConfiguration {

	    @Value("${azure.storage.connection-string}")
	    public String azureStorageConnectionString;

	    @Value("${azure.storage.container-name}")
	    public String azureStorageContainerName;

	    @Bean
	    public BlobServiceClient blobServiceClient() {
	        return new BlobServiceClientBuilder().connectionString(azureStorageConnectionString).buildClient();
	    }

	    @Bean
	    public BlobContainerClient blobClient() {
	        return blobServiceClient().getBlobContainerClient(azureStorageContainerName);
	    }

}


