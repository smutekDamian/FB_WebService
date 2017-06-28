package pl.smutek;

/**
 * Created by Jakub on 2017-05-16.
 */
public enum Field {
    ID("id"),
    ABOUT("about"),
    AGE_RANGE("age_range"),
    BIRTHDAY("birthday"),
    EMAIL("email"),
    FIRST_NAME("first_name"),
    LAST_NAME("last_name"),
    HOMETOWN("hometown"),
    WORK("work");

    private String name;

    Field(String name){
        this.name = name;
    }

    @Override
    public String toString(){
        return this.name;
    }


    /*
    All possible fields in user profile
    "id", "about", "age_range", "birthday", "context", "cover", "currency", "devices",
    "education", "email", "favorite_athletes", "favorite_teams", "first_name", "gender", "hometown",
    "inspirational_people", "installed", "install_type", "is_verified", "languages", "last_name",
    "link", "locale", "location", "meeting_for", "middle_name", "name", "name_format", "political",
    "quotes", "payment_pricepoints", "relationship_status", "religion", "security_settings",
    "significant_other", "sports", "test_group", "timezone", "third_party_id", "updated_time",
    "verified", "video_upload_limits", "viewer_can_send_gift", "website", "work"
     */
}
