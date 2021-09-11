package com.ghd.bpx.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.ghd.bpx.entity.Facilities;
import com.ghd.bpx.projection.FacilitiesProjection;

public interface FacilitiesRepository extends CrudRepository<Facilities, String>{

	public Page<FacilitiesProjection> findAll(Pageable pageable);	

}
