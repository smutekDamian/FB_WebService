package pl.smutek.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.social.ApiException;
import org.springframework.social.facebook.api.*;
import org.springframework.web.bind.annotation.*;
import pl.smutek.Field;
import pl.smutek.model.UserDetails;

import java.io.IOException;
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
        PagedList<org.springframework.social.facebook.api.Post> feed = facebook.feedOperations().getFeed();
        List<pl.smutek.model.Post> list = new ArrayList<>();
        for (org.springframework.social.facebook.api.Post p: feed){
            String from = String.valueOf(p.getFrom());
            String message = p.getMessage();
            String picture = p.getPicture();
            String name = p.getName();
            pl.smutek.model.Post post = new pl.smutek.model.Post(p.getId(), message, from,  name, picture);
            list.add(post);
        }
        return list.toArray();
    }

    @GetMapping
    @RequestMapping("/api/profileDetails")
    public Object getProfilesDetails(){
        String [] fields = {Field.ID.toString(), Field.FIRST_NAME.toString(),
                Field.LAST_NAME.toString(), Field.EMAIL.toString(), Field.BIRTHDAY.toString(),
                Field.HOMETOWN.toString(), Field.WORK.toString(), Field.ABOUT.toString()};
        User user = facebook.fetchObject("me", User.class, fields);
        String profileImage = "http://graph.facebook.com/" + user.getId() + "/picture?type=large";
        return new UserDetails(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), profileImage, "uro",
                "town", user.getGender());
    }

    @RequestMapping(value = "/api/deletePost", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity<Void> deletePost(@RequestBody String id) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        String deletingPostId = mapper.readValue(id, String.class);
        try {
            facebook.feedOperations().deletePost(deletingPostId);
        } catch (ApiException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
