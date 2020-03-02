var express = require('express');
var router = express.Router();
var teamAPI = require('./teamAPI');

/* GET home page. */

router.post('/team/add', async function(req, res, next) {
    const name = req.body.teamName;
    await teamAPI.add(name, time);
    res.redirect('back');
});

router.get('/team/:id', teamAPI.getById);

router.post('/team/:id/delete', async function(req, res, next){
    const id = req.params.id;
    await teamAPI.deleteById(id);
    res.redirect('back');
});

module.exports = router;