package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {

	@Before
	public void beforeHooks(Scenario scenario) {
		String name = scenario.getName();
		System.out.println("Scenarion title : " + name);
	}

	@After
	public void afterHooks(Scenario scenario) throws Throwable {
		String status = scenario.getStatus();
		System.out.println("Scenario status : " + status);

		if (scenario.isFailed()) {
			screenshot("C:\\Users\\user pc\\eclipse-workspace\\Adactin_7.30am_Batch\\Failed Screenshot\\img.png");
		}
	}
}
