package com.cfc.cfcbackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.cfc.cfcbackend.db.mappers")
@ComponentScan(basePackages = "com.cfc")
public class CfcBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CfcBackendApplication.class, args);
	}


}
