package pl.smutek.controller;

import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.social.facebook.api.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by damian on 02.06.17.
 */
@RestController
public class HomeController {
    private Facebook facebook;

    public HomeController(Facebook facebook) {
        this.facebook = facebook;
    }

    @GetMapping
    @RequestMapping("/api/wall")
    public Object[] getWallPosts(){
        PagedList<Post> posts = facebook.feedOperations().getPosts();
        List<pl.smutek.model.Post> list = new ArrayList<>();
        for (Post p: posts) {
            pl.smutek.model.Post post = new pl.smutek.model.Post();
            post.setFrom(p.getFrom().toString());
            post.setMessage(p.getMessage());
            post.setName(p.getName());
            post.setPicture(p.getPicture());
            list.add(post);
        }
        return list.toArray();
    }
}
