package com.ghd.bpx.impl;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
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
import com.ghd.bpx.dto.FacilityDTO;
import com.ghd.bpx.projection.FacilityProjection;
import com.ghd.bpx.repository.FacilityRepository;
import com.ghd.bpx.service.FacilityService;
import com.ghd.bpx.util.UtilImpl;

@Service
public class FacilityServiceImpl implements FacilityService {

	@Autowired
	FacilityRepository facilityRepository;

	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

	@Override
	public FacilityDTO getFacilityData(Pageable pageable, String sortBy, String order, String filter) {

		ObjectMapper mapper = new ObjectMapper();

		pageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
				Sort.by(UtilImpl.getSortingOrders(sortBy, order)));

		Map<String, Object> columnsConfig = new HashMap<>();
		try {
			InputStream file = getClass().getResourceAsStream("/facility_column_config.json");

			columnsConfig = mapper.readValue(file,
					TypeFactory.defaultInstance().constructMapType(HashMap.class, String.class, Object.class));

		} catch (Exception e) {
			LOGGER.log(Level.WARNING, e, () -> "Configuration file not available");
		}
		Page<FacilityProjection> facility = facilityRepository.findAllByFacilityFilterIgnoreCase(pageable, filter);
		return new FacilityDTO(facility, columnsConfig.get(filter.toLowerCase()));
	}
	

	@Override
	public List<String> getFilterForFacilityData() {
		return facilityRepository.findDistinctFacilityFilter();
	}

	public FacilityDTO searchFacilityData(Pageable pageable, String facilityName, String filter) {
		ObjectMapper mapper = new ObjectMapper();

		pageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize());

		Map<String, Object> columnsConfig = new HashMap<>();
		try {
			InputStream file = getClass().getResourceAsStream("/facility_column_config.json");

			columnsConfig = mapper.readValue(file,
					TypeFactory.defaultInstance().constructMapType(HashMap.class, String.class, Object.class));

		} catch (Exception e) {
			LOGGER.log(Level.WARNING, e, () -> "Configuration file not available");
		}
		Page<FacilityProjection> facility = facilityRepository
				.findAllByFacilityNameContainingAndFacilityFilterIgnoreCase(pageable, facilityName, filter);
		return new FacilityDTO(facility, columnsConfig.get(filter.toLowerCase()));
	}

}
