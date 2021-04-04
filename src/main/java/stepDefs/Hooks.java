package stepDefs;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;
import utils.CucumberLogUtils;
import utils.LocalConfigUtils;

public class Hooks {

    @Before
    public void setUp(Scenario currentScenario){
        CucumberLogUtils.initScenario(currentScenario);

        RestAssured.baseURI = LocalConfigUtils.getProperty("baseURL");
        RestAssured.requestSpecification = RestAssured.given();
    }

    @After
    public void tearDown(){

    }
}
