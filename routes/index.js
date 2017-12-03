const express = require('express');
const router = express.Router();
const stringCalc = require('../services/string-calculator');

/* GET home page. */
router.get('/', (req, res) => {

  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
});

router.post('/sum', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  var respo = JSON.stringify({ "sum": stringCalc.sum(req.body.input) });
  res.send(respo);
});
module.exports = router;
