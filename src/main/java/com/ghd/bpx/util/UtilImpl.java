package com.ghd.bpx.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;


public abstract class UtilImpl {
	
	
	private UtilImpl() {
	    throw new IllegalStateException("Utility class");
	}
	public static List<Order> getSortingOrders(String sortBy,String order){
		List<Order> orders = new ArrayList<>();
		if (order.equalsIgnoreCase("desc")) {
			orders.add(new Order(Direction.DESC, sortBy));
		} else {
			orders.add(new Order(Direction.ASC, sortBy));
		}
		return orders;
	}

}
