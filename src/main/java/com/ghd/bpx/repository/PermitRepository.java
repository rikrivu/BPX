package com.ghd.bpx.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;

import com.ghd.bpx.entity.Permit;
import com.ghd.bpx.projection.PermitProjection;

public interface PermitRepository extends CrudRepository<Permit, Long>{

	
	List<PermitProjection> findAllByFacilityId(Sort sort,String filter);

}
