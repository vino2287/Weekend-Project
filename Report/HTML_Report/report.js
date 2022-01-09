$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Functionality",
  "description": "",
  "id": "hotel-booking-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User login the adactin application",
  "description": "",
  "id": "hotel-booking-functionality;user-login-the-adactin-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the \"\u003cUsername\u003e\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the \"\u003cPassword\u003e\" valid password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "hotel-booking-functionality;user-login-the-adactin-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 16,
      "id": "hotel-booking-functionality;user-login-the-adactin-application;;1"
    },
    {
      "cells": [
        "AAA",
        "111"
      ],
      "line": 17,
      "id": "hotel-booking-functionality;user-login-the-adactin-application;;2"
    },
    {
      "cells": [
        "BBB",
        "222"
      ],
      "line": 18,
      "id": "hotel-booking-functionality;user-login-the-adactin-application;;3"
    },
    {
      "cells": [
        "CCC",
        "333"
      ],
      "line": 19,
      "id": "hotel-booking-functionality;user-login-the-adactin-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 343300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 6661437400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 259356300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 142375200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User login the adactin application",
  "description": "",
  "id": "hotel-booking-functionality;user-login-the-adactin-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the \"AAA\" valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the \"111\" valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 504194300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 105521600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 100813900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 1599198600,
  "status": "passed"
});
formatter.after({
  "duration": 619400,
  "status": "passed"
});
formatter.before({
  "duration": 145700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 393228600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 141072500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 124924800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User login the adactin application",
  "description": "",
  "id": "hotel-booking-functionality;user-login-the-adactin-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the \"BBB\" valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the \"222\" valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 420930000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 138210300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 97145400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 480524100,
  "status": "passed"
});
formatter.after({
  "duration": 286900,
  "status": "passed"
});
formatter.before({
  "duration": 142000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 417796300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 144118800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 141416700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User login the adactin application",
  "description": "",
  "id": "hotel-booking-functionality;user-login-the-adactin-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the \"CCC\" valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the \"333\" valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 401934700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CCC",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 146285300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "333",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 101553800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 508605100,
  "status": "passed"
});
formatter.after({
  "duration": 112700,
  "status": "passed"
});
formatter.before({
  "duration": 574000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 444079500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 128491500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 120662000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User login the adactin application",
  "description": "",
  "id": "hotel-booking-functionality;user-login-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User launch the adaction application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adaction_application()"
});
formatter.result({
  "duration": 446243600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 146276200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 108382600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 1104970200,
  "status": "passed"
});
formatter.after({
  "duration": 74000,
  "status": "passed"
});
});