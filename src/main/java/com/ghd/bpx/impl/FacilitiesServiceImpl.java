package com.ghd.bpx.impl;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.ghd.bpx.dto.FacilitiesDTO;
import com.ghd.bpx.projection.FacilitiesProjection;
import com.ghd.bpx.repository.FacilitiesRepository;
import com.ghd.bpx.service.FacilitiesService;
import com.ghd.bpx.util.UtilImpl;

@Service
public class FacilitiesServiceImpl implements FacilitiesService {
	
	@Autowired
	FacilitiesRepository facilitiesRepository;

	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

	@Override
	public FacilitiesDTO getFacilityData(Pageable pageable, String sortBy, String order, String filter) {
		ObjectMapper mapper = new ObjectMapper();

		pageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
				Sort.by(UtilImpl.getSortingOrders(sortBy, order)));

		Map<String, Object> columnsConfig = new HashMap<>();
		try {
			InputStream file = getClass().getResourceAsStream("/facilities_column_config.json");

			columnsConfig = mapper.readValue(file,
					TypeFactory.defaultInstance().constructMapType(HashMap.class, String.class, Object.class));

		} catch (Exception e) {
			LOGGER.log(Level.WARNING, e, () -> "Configuration file not available");
		}
		Page<FacilitiesProjection> facilities = facilitiesRepository.findAll(pageable);
		return new FacilitiesDTO(facilities, columnsConfig.get(filter.toLowerCase()));
	}
}
