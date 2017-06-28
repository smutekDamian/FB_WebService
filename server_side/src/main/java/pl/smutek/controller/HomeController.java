package pl.smutek.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.social.ApiException;
import org.springframework.social.facebook.api.*;
import org.springframework.web.bind.annotation.*;
import pl.smutek.Field;
import pl.smutek.model.Post;

import java.io.IOException;

/**
 * Created by damian on 02.06.17.
 */
@RestController
public class HomeController {
    private Facebook facebook;

    public HomeController(Facebook facebook) {
        this.facebook = facebook;
    }




    @RequestMapping(value = "/api/wall", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody ResponseEntity<Void> sendPost(@RequestBody String post) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Post post1 = mapper.readValue(post, Post.class);
        String [] fields = {Field.ID.toString()};
        User user = facebook.fetchObject("me", User.class, fields);
        PostData postData = new PostData(user.getId());
        postData.message(post1.getMessage());
        try {
            facebook.feedOperations().post(postData);
        } catch (ApiException e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
