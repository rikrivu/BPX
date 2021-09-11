package com.ghd.bpx.impl;

import java.io.InputStream;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ghd.bpx.dto.PermitDTO;
import com.ghd.bpx.repository.PermitRepository;
import com.ghd.bpx.service.PermitService;
import com.ghd.bpx.util.UtilImpl;

@Service
public class PermitServiceImpl implements PermitService {

	@Autowired
	PermitRepository permitRepository;

	private static final Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

	@Override
	public PermitDTO getPermitDataForFacility(String sortBy, String order, String filter) {

		ObjectMapper mapper = new ObjectMapper();
		Object columns = null;
		try {
			InputStream configFile = getClass().getResourceAsStream("/permit_column_config.json");
			columns = mapper.readValue(configFile, Object.class);

		} catch (Exception e) {
			LOGGER.log(Level.WARNING, e, () -> "Configuration file not available");

		}

		return new PermitDTO(
				permitRepository.findAllByFacilityId(Sort.by(UtilImpl.getSortingOrders(sortBy, order)), filter),
				columns);
	}

}
