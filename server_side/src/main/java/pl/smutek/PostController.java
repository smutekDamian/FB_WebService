package pl.smutek;

import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by damian on 16.05.17.
 */
@RestController
public class PostController {

    private Facebook facebook;

    public PostController(Facebook facebook) {
        this.facebook = facebook;
    }

    @GetMapping
    @RequestMapping("/api/feeds")
    public PagedList<org.springframework.social.facebook.api.Post> getFeeds(Model model){
//        String [] fields = {Field.ID.toString(), Field.FIRST_NAME.toString(),
//                Field.LAST_NAME.toString(), Field.EMAIL.toString()};
//        User user = facebook.fetchObject("me", User.class, fields);
//
//        model.addAttribute("facebookProfile", user);
        PagedList<org.springframework.social.facebook.api.Post> feed = facebook.feedOperations().getFeed();
//        model.addAttribute("feed", feed);
        return feed;
    }
}
