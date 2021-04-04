$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/sdetCourse.feature");
formatter.feature({
  "name": "Sdet course Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify duration of course Java",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I set a query param as \"name\" equal to \"Java\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.iSetAQueryParamAsEqualTo(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET request to resource \"/programs/sdetcourse\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.i_send_GET_request_to_resource(String)"
});
formatter.write("2021-04-04 14:31:10 INFO: Sent GET http Request to: /programs/sdetcourse");
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
formatter.write("2021-04-04 14:31:10 PASS: Expected status code: 200 | Actual status code: 200");
formatter.write("2021-04-04 14:31:10 INFO: {\n    \"data\": [\n        {\n            \"_id\": \"6069cdd6844cdd00175ec0bf\",\n            \"name\": \"Java\",\n            \"duration\": \"3 months\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"6069ce0c844cdd00175ec0c0\",\n            \"name\": \"Java\",\n            \"duration\": \"3 months\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"6069ce23844cdd00175ec0c1\",\n            \"name\": \"Java\",\n            \"duration\": \"3 months\",\n            \"__v\": 0\n        }\n    ]\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response body\u0027s property \"data[0].name\" is \"Java\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.responseBodySPropertyIs(String,String)"
});
formatter.write("2021-04-04 14:31:11 INFO: data[0].name");
formatter.write("2021-04-04 14:31:11 PASS: expected value: Java | actual value: Java");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});