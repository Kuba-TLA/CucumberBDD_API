Feature: Sdet course Scenarios

  Scenario: Verify status code is 200 on GET request
    Given I send GET request to resource "/programs/sdetcourse"
    Then Response has a status code 200

  Scenario: Verify a course exists
    Given I set a query param as "name" equal to "Java"
    When I send GET request to resource "/programs/sdetcourse"
    Then Response has a status code 200

  @test
  Scenario: Verify duration of course Java
    Given I set a query param as "name" equal to "Java"
    When I send GET request to resource "/programs/sdetcourse"
    Then Response has a status code 200
    Then Response body's property "data[0].duration" is "3 months"