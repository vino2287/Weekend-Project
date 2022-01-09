Feature: Hotel Booking Functionality 

Background: 
	Given User launch the adaction application 
	When User enter the "vinovicky" valid username 
	And User enter the "GMN630" valid password 
	
	
Scenario Outline: User login the adactin application 
	Given User launch the adaction application 
	When User enter the "<Username>" valid username 
	And User enter the "<Password>" valid password 
	Then User validate the username and password 
	
	Examples: 
		|Username|Password|
		|AAA|111|
		|BBB|222|
		|CCC|333|
		
Scenario: scenario description
    Given following list o f
    When an action is performed
    Then something should be asserted
		
@Login 
Scenario: User login the adactin application 
	Given User launch the adaction application 
	When User enter the "vinovicky" valid username 
	And User enter the "GMN630" valid password 
	Then User validate the username and password