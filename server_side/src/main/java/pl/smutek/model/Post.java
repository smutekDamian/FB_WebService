package pl.smutek.model;

/**
 * Created by damian on 16.05.17.
 */
public class Post {
    private String name;
    private String from;
    private String message;
    private String picture;

    public Post( String from, String message, String picture) {
        this.from = from;
        this.message = message;
        this.picture = picture;
    }

    public Post(String name, String from, String message, String picture) {
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
