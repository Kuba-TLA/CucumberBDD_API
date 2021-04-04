Feature: Students resource scenarios

  Scenario: Verify a student is created
    Given Request header's "content-type" is set as "application/json"
    When I set request's body with following payload:
      | firstName | John             |
      | lastName  | Doe              |
      | batch     | 3                |
      | email     | johndoe@test.com |
    And I send POST request to resource "/resources/students"
    Then Response has a status code 200
    When I send GET request to resource "/resources/students" with new id
#    Then Response has a status code 200
    Then Response body's property "data[0].email" is "johndoe@test.com"
