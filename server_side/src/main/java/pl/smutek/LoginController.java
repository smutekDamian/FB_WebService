package pl.smutek;


import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.social.facebook.api.Post;
import org.springframework.social.facebook.api.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by damian on 04.03.17.
 */
@Controller
@RequestMapping("/")
public class LoginController {

    private Facebook facebook;
    private ConnectionRepository connectionRepository;

    public LoginController(Facebook facebook, ConnectionRepository connectionRepository) {
        this.facebook = facebook;
        this.connectionRepository = connectionRepository;
    }

    @GetMapping
    public String helloFacebook(Model model) {
        if (connectionRepository.findPrimaryConnection(Facebook.class) == null) {
            return "redirect:/connect/facebook";
        }

        String [] fields = {Field.ID.toString(), Field.FIRST_NAME.toString(),
                 Field.LAST_NAME.toString(), Field.EMAIL.toString()};
        User user = facebook.fetchObject("me", User.class, fields);

        model.addAttribute("facebookProfile", user);
        PagedList<Post> feed = facebook.feedOperations().getFeed();
        model.addAttribute("feed", feed);
        return "hello";
    }

}
