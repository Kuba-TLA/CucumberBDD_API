import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/SdetCourseRunner",
        "rerun:target/Rerun_Failed/SdetCourseRunner.txt",
        "json:target/cucumberTestReport.json"},
        features = "src/main/resources/features/sdetCourse.feature",
        glue = "stepDefs"
        , stepNotifications = true
        ,tags = "@test"
        //,dryRun = true
)
public class SdetCourseRunner {
}
