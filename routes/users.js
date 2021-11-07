var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getbyid/:id/:name', function(req, res, next) {
    
  res.send(`respond with a resource ${req.params.id} with name ${req.params.name}`);
});

module.exports = router;