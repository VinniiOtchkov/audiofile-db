exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del().then(function() {
    // Inserts seed entries
    return knex('comments').insert([

      {
        "post_id":1,

        "producer_name": "The Guy",

        "beat_title": "Hello World",

        "beat_description":"Here's my flip",

        "beat_url":"<iframe width='auto' height='auto' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336570719&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>",

        "vote_count":0

      }, {
        "post_id":2,

        "producer_name": "Fat Boi",

        "beat_title": "World Hello",

        "beat_description":"Went drum heavy on this one.",

        "beat_url":"<iframe width='auto' height='auto' src='https://www.youtube.com/embed/X4or-6CARlI' frameborder='0' allowfullscreen></iframe>",

        "vote_count":3



      },
      {
       "post_id":1,

       "producer_name": "Ayyyyeee",

       "beat_title": "LOLOLOL",

       "beat_description":"Went crazy.",

       "beat_url":"<iframe width='auto' height='auto' src='https://www.youtube.com/embed/X4or-6CARlI' frameborder='0' allowfullscreen></iframe>",

       "vote_count":2


     },
    ]);
  });
};
