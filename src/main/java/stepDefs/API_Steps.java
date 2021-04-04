package stepDefs;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import utils.CucumberLogUtils;

import java.util.Map;

public class API_Steps {
    RequestSpecification requestSpecification = RestAssured.requestSpecification;
    Response response;
    String newId;

    @Given("I send GET request to resource {string}")
    public void i_send_GET_request_to_resource(String resource) {
        requestSpecification.basePath(resource);
        response = requestSpecification.get();

        CucumberLogUtils.logInfo("Sent GET http Request to: " + resource);
    }

    @Then("Response has a status code {int}")
    public void responseHasAStatusCode(int statusCode) {
        Assert.assertEquals(statusCode, response.getStatusCode());
        CucumberLogUtils.logPass("Expected status code: " + statusCode + " | Actual status code: " + response.getStatusCode());
        CucumberLogUtils.logInfo(response.body().jsonPath().prettyPrint());
    }

    @Given("I set a query param as {string} equal to {string}")
    public void iSetAQueryParamAsEqualTo(String key, String value) {
        requestSpecification.queryParam(key, value);
    }

    @Then("Response body's property {string} is {string}")
    public void responseBodySPropertyIs(String property, String value) {
        Assert.assertEquals(value, response.body().jsonPath().getString(property));
        CucumberLogUtils.logInfo(property);
        CucumberLogUtils.logPass("expected value: " + value + " | actual value: " + response.body().jsonPath().getString(property));
    }

    @Given("Request header's {string} is set as {string}")
    public void requestHeaderSIsSetAs(String property, String value) {
        requestSpecification.header(property, value);

//        switch (property.toLowerCase()){
//            case "content-type": requestSpecification.header(property, ContentType.JSON);
//            default:
//                System.out.println("unknown property name");
//        }
    }

    @When("I set request's body with following payload:")
    public void iSetRequestSBodyWithFollowingPayload(Map<String, String> data) {
        requestSpecification.body(data);
    }

    @And("I send POST request to resource {string}")
    public void iSendPOSTRequestToResource(String resource) {
        requestSpecification.basePath(resource);
        response = requestSpecification.post();

        newId = response.jsonPath().getString("data._id");

        CucumberLogUtils.logInfo("Sent POST http Request to: " + resource);
    }

    @When("I send GET request to resource {string} with new id")
    public void iSendGETRequestToResourceWithNewId(String resource) {
        response = requestSpecification.get(resource + "/" + newId);

        CucumberLogUtils.logInfo("Sent GET http Request to: " + resource);
    }
}
