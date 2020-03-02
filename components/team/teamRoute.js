var express = require('express');
var router = express.Router();
var teamAPI = require('./teamAPI');

/* GET home page. */

router.post('/add', async function(req, res, next) {
    const name = req.body.teamName;
    await teamAPI.add(name);
    res.redirect('back');
});

router.get('/:id', teamAPI.getById);

router.post('/:id/delete', async function(req, res, next){
    const id = req.params.id;
    await teamAPI.deleteById(id);
    res.redirect('back');
});

module.exports = router;