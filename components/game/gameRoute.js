var express = require('express');
var router = express.Router();
var gameAPI = require('./gameAPI');

/* GET home page. */

router.post('/add', async function(req, res, next) {
    const date = req.body.singleDate;
    const time = req.body.singleTime;
    const teamId = req.body.teamId;
    await gameAPI.add(date, time, teamId);
    res.redirect('back');
});

router.get('/:id', gameAPI.getById);

router.post('/:id/delete', async function(req, res, next){
    const id = req.params.id;
    await gameAPI.deleteById(id);
    res.redirect('back');
});

router.post('/:id/update', async function(req, res, next){
    const id = req.params.id;
    const people = req.body.personId;
    const peopleStatus = req.body.personStatus;
    await gameAPI.update(id, people, peopleStatus);
    res.redirect('back');
});

module.exports = router;