package pl.smutek.controller;

import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.social.facebook.api.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.smutek.Field;
import pl.smutek.model.UserDetails;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by damian on 16.05.17.
 */
@RestController
public class OwnerProfileController {

    private Facebook facebook;

    public OwnerProfileController(Facebook facebook) {
        this.facebook = facebook;
    }

    @GetMapping
    @RequestMapping("/api/profilePosts")
    public Object[] getProfilesPost(){
//        String [] fields = {Field.ID.toString(), Field.FIRST_NAME.toString(),
//                Field.LAST_NAME.toString(), Field.EMAIL.toString()};
//        User user = facebook.fetchObject("me", User.class, fields);
//
//        model.addAttribute("facebookProfile", user);
        PagedList<org.springframework.social.facebook.api.Post> feed = facebook.feedOperations().getFeed();
//        model.addAttribute("feed", feed);
        List<pl.smutek.model.Post> list = new ArrayList<>();
        for (org.springframework.social.facebook.api.Post p: feed){
            String from = String.valueOf(p.getFrom());
            String message = p.getMessage();
            String picture = p.getPicture();
            pl.smutek.model.Post post = new pl.smutek.model.Post(from, message, picture);
            list.add(post);
        }
        return list.toArray();
    }

    @GetMapping
    @RequestMapping("/api/profileDetails")
    public Object getProfilesDetails(){
        String [] fields = {Field.ID.toString(), Field.FIRST_NAME.toString(),
                Field.LAST_NAME.toString(), Field.EMAIL.toString()};
        User user = facebook.fetchObject("me", User.class, fields);
        UserDetails userDetails = new UserDetails(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail());
        return userDetails;
    }
}
