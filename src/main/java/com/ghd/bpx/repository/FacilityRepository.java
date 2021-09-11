package com.ghd.bpx.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ghd.bpx.entity.Facility;
import com.ghd.bpx.projection.FacilityProjection;

public interface FacilityRepository extends CrudRepository<Facility, String> {



	@Query("select distinct f.facilityFilter from Facility f")
	List<String> findDistinctFacilityFilter();

	Page<FacilityProjection> findAllByFacilityFilterIgnoreCase(Pageable pageable, String filter);

	Page<FacilityProjection> findAllByFacilityNameContainingAndFacilityFilterIgnoreCase(Pageable pageable, String facilityName,String filter);
	

}
