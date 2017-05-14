package pl.smutek;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by damian on 04.03.17.
 */
@RestController
public class LoginController {


    @RequestMapping("/api")
    public String showLoginPage(){
        return "login";
    }

}
