const express = require('express');
const router = express.Router();
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

router.get('/convert', (req, res) => {
  const input = req.query.input;
  const num = convertHandler.getNum(input);
  const unit = convertHandler.getUnit(input);

  if (num === 'invalid number' || unit === 'invalid unit') {
    return res.json({ error: 'invalid input' });
  }

  const returnUnit = convertHandler.getReturnUnit(unit);
  const returnNum = convertHandler.convert(num, unit);

  res.json({
    initNum: num,
    initUnit: unit,
    returnNum,
    returnUnit
  });
});

module.exports = router;
