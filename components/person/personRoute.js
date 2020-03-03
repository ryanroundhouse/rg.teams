var express = require('express');
var router = express.Router();
var gameAPI = require('./personAPI');

/* GET home page. */

router.post('/add', async function(req, res, next) {
    const name = req.body.personName;
    const teamId = req.body.teamId;
    const email = req.body.personEmail;
    await gameAPI.add(name, teamId, email);
    res.redirect('back');
});

router.get('/:id', gameAPI.getById);

router.post('/:id/delete', async function(req, res, next){
    const id = req.params.id;
    await gameAPI.deleteById(id);
    res.redirect('back');
});

module.exports = router;