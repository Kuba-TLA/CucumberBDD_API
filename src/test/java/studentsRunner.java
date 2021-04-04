import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/studentsRunner",
        "rerun:target/Rerun_Failed/studentsRunner.txt",
        "json:target/cucumberTestReport.json"},
        features = "src/main/resources/features/students.feature",
        glue = "stepDefs"
        , stepNotifications = true
        //,tags = "@test"
        //,dryRun = true
)
public class studentsRunner {
}
