var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var populate = require('../lib/populate');

router.get('/', function(req, res, next) {

  // populate.getAll('events', 'performers').then(function (result) {
  //         var populatedArr = populate.mapAllToObj(result, 'performer_id', 'performers');
  //         res.send(populatedArr);
  //     });
  knex('posts')
    .select('posts.id as sample_id',
      'posts.artist_name as sample_artist',
      'posts.title as sample_title',
      'posts.description as sample_description',
      'posts.url as sample_url',
      'comments.id as comment_id',
      'comments.producer_name as producer_name',
      'comments.beat_title as beat_title',
      'comments.beat_description as beat_description',
      'comments.beat_url as beat_url',
      'comments.vote_count as vote_count'
    )
    .leftJoin('comments', 'posts.id', 'comments.post_id')
    .then(function(posts) {
      res.send(posts);
  });
});

router.get('/posts/:id', function(req,res){
  knex('posts')
  .select()
  .where('id',req.params.id)
  .then(function(post){
    res.send(post)
  })
})



router.get('/posts', function(req, res, next) {
  knex('posts')
    .then(function(posts) {
      res.send(posts);
  });
});

router.get('/comments', function(req, res, next) {
  knex('comments')
    .then(function(comments) {
      res.send(comments);
  });
});

router.post('/posts', function(req,res){
  knex('posts')
  .insert({
    artist_name:req.body.artist_name,
    title:req.body.title,
    url:req.body.url,
    description:req.body.description,
  }).then(()=>{
    res.redirect('/')
  })
})

router.delete('/posts/:id', (req,res) =>{
  knex('posts').where('id',req.params.id).del().then(()=>{
    res.redirect('/')
  })
})


populate.getAll('events', 'performers').then(function (result) {
        var populatedArr = populate.mapAllToObj(result, 'performer_id', 'performers');
        res.send(populatedArr);
    });




module.exports = router;
