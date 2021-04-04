$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/students.feature");
formatter.feature({
  "name": "Students resource scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify a student is created",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Request header\u0027s \"content-type\" is set as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.requestHeaderSIsSetAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set request\u0027s body with following payload:",
  "rows": [
    {
      "cells": [
        "firstName",
        "John"
      ]
    },
    {
      "cells": [
        "lastName",
        "Doe"
      ]
    },
    {
      "cells": [
        "batch",
        "3"
      ]
    },
    {
      "cells": [
        "email",
        "johndoe@test.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.iSetRequestSBodyWithFollowingPayload(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST request to resource \"/resources/students\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.iSendPOSTRequestToResource(String)"
});
formatter.write("2021-04-04 15:04:11 INFO: Sent POST http Request to: /resources/students");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response has a status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.responseHasAStatusCode(int)"
});
formatter.write("2021-04-04 15:04:11 PASS: Expected status code: 200 | Actual status code: 200");
formatter.write("2021-04-04 15:04:11 INFO: {\n    \"data\": {\n        \"_id\": \"606a0daafba2b700177b1ce9\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"batch\": 3,\n        \"email\": \"johndoe@test.com\",\n        \"__v\": 0\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET request to resource \"/resources/students\" with new id",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.iSendGETRequestToResourceWithNewId(String)"
});
formatter.write("2021-04-04 15:04:11 INFO: Sent GET http Request to: /resources/students");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response body\u0027s property \"data[0].email\" is \"johndoe@test.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.responseBodySPropertyIs(String,String)"
});
formatter.result({
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\r\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:352)\r\n\tat stepDefs.API_Steps.responseBodySPropertyIs(API_Steps.java:43)\r\n\tat ✽.Response body\u0027s property \"data[0].email\" is \"johndoe@test.com\"(file:src/main/resources/features/students.feature:14)\r\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\r\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\r\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\r\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:352)\r\n\tat stepDefs.API_Steps.responseBodySPropertyIs(API_Steps.java:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:97)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});