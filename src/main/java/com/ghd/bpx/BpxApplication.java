package com.ghd.bpx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class BpxApplication {

	public static void main(String[] args) {
		SpringApplication.run(BpxApplication.class, args);
	}

}
