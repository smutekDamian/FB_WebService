package pl.smutek.model;

import java.io.Serializable;

/**
 * Created by damian on 16.05.17.
 */
public class Post implements Serializable {
    private static final long serialVersionUID = 1L;
    private String message;
    private String from;
    private String name;
    private String picture;



    public Post(String message, String from, String name,   String picture) {
        this.name = name;
        this.from = from;
        this.message = message;
        this.picture = picture;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Post() {
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
