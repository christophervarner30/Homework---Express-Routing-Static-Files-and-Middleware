var express = require('express');
var router = express.Router();

var data = [
    { id: 0, name: "person1", username: "user1"},
    { id: 1, name: "person2", username: "user2"},
    { id: 2, name: "person3", username: "user3"}
];

router.get('person', function(req, res, next) {
    res.status(200);
    res.send(data);
});

router.get('/person/:id', function(req, res, next) {
    res.status(200);
    res.send(data.filter(person => {
       person.id === req.params.id
    }));
});

router.post('/person', function(req, res, next) {
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});

router.put('/person/:id', function(req, res, next) {
   res.status(200);

   var index = data.indexOf(person => {
     return person.id === req.params.id;
   });

   data[index] = req.body;
   res.send(data[index]);
});

router.delete('/person/:id', function(req, res, next) {
    res.status(200);
    data[index] = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
 });