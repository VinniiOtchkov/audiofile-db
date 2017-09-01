var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var populate = require('knex-populate');

router.get('/', function(req, res, next) {
  populate(knex, 'posts', 'comments', 'post_id', 'comments')
    .then(posts => res.send(posts))
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
    description:req.body.description
  }).then(()=>{
    res.redirect('/')
  })
})

router.post('/comments',function(req,res){
  knex('comments')
    .insert({
      post_id:req.body.post_id,
      producer_name:req.body.producer_name,
      beat_title:req.body.beat_title,
      beat_description:req.body.beat_description,
      beat_url:req.body.beat_url,
      vote_count:0
    }).then(()=>{
      res.redirect('/')
    })
})

router.delete('/posts/:id', (req,res) =>{
  knex('posts').where('id',req.params.id).del().then(()=>{
    res.redirect('/')
  })
})


router.patch('/comments/:id', function(req, res) {
  console.log('req.body', req.body);
  knex('comments')
    .update({ vote_count: req.body.vote_count+1 })
    .where('id', req.params.id)
    .then(function() {
      populate(knex, 'posts', 'comments', 'post_id', 'comments')
        .then(posts => res.send(posts))
    });
});




module.exports = router;
