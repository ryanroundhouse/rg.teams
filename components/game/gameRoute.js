var express = require('express');
var router = express.Router();
var gameAPI = require('./gameAPI');

/* GET home page. */

router.post('/add', async function(req, res, next) {
    const date = req.body.singleDate;
    const time = req.body.singleTime;
    await gameAPI.add(date, time);
    res.redirect('back');
});

router.get('/game/:id', gameAPI.getById);

router.post('/delete/:id', async function(req, res, next){
    const id = req.params.id;
    await gameAPI.deleteById(id);
    res.redirect('back');
});

module.exports = router;